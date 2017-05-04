import { Request, Response, Router } from "express";
import * as request from "request";
import { ReferenceRepo, RepoFileFetcher } from "../../github";
import { ColorConverter } from "../color-converter";

export class ModRouter {
    public router: Router;

    constructor(private repoFileFetcher: RepoFileFetcher) {
        this.router = Router();
        this.init();
    }

    public init(): void {
        this.router.get("/:modOwner/:modRepo/:owner/:repo.svg", (req: Request, res: Response) => {
            const modOwner = req.params.modOwner as string;
            const modRepo = req.params.modRepo as string;
            const owner = req.params.owner as string;
            const repo = req.params.repo as string;

            this.fetchDetails(modOwner, modRepo, owner, repo).then((result) => {
                const displayName = modRepo.replace("minetest-", "");
                const color = ColorConverter.percentageToHexColor(result.percentage);
                request(`https://img.shields.io/badge/${displayName}-${result.percentage}%25-${color}.svg`).pipe(res);
            }).catch((error) => {
                res.status(400).json({ message: `${repo} is not a mod!` });
            });
        });

        this.router.get("/:modOwner/:modRepo/:owner/:repo", (req: Request, res: Response) => {
            const modOwner = req.params.modOwner as string;
            const modRepo = req.params.modRepo as string;
            const owner = req.params.owner as string;
            const repo = req.params.repo as string;

            this.fetchDetails(modOwner, modRepo, owner, repo).then((result) => {
                res.status(200).json(result);
            }).catch((error) => {
                res.status(400).json({ message: `${repo} is not a mod!` });
            });
        });
    }

    private fetchDetails(modOwner: string, modRepo: string, owner: string, repo: string, path: string = ""): Promise<ComputationSummary> {
        return new Promise<ComputationSummary>((resolve, reject) => {
            this.repoFileFetcher.fetch({
                owner: owner,
                repo: repo,
                path: path,
            }).then((files) => {
                const referenceRepo = new ReferenceRepo(this.repoFileFetcher, {
                    owner: modOwner,
                    repo: modRepo,
                    path: "textures",
                });

                referenceRepo.fetch().then((fileMap) => {
                    let successfulFiles: number = 0;
                    const missingFiles: string[] = new Array<string>();

                    for (const file of fileMap.values()) {
                        if (files.has(file.name)) {
                            successfulFiles++;
                            continue;
                        }
                        missingFiles.push(file.name);
                    }

                    resolve({
                        percentage: parseFloat(Math.round((successfulFiles / fileMap.size) * 100).toPrecision(2)),
                        numberTexturesMissing: fileMap.size - successfulFiles,
                        missingFiles: missingFiles,
                    });
                });
            }).catch((error) => {
                reject(error);
            });
        });
    }
}
