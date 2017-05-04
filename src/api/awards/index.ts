import { Request, Response, Router } from "express";
import * as request from "request";
import { ReferenceRepo, RepoFileFetcher } from "../../github";
import { ColorConverter } from "../color-converter";

export class AwardsRouter {
    public router: Router;
    private referenceRepo: ReferenceRepo;

    constructor(private repoFileFetcher: RepoFileFetcher) {
        this.router = Router();
        this.referenceRepo = new ReferenceRepo(repoFileFetcher, {
            owner: "minetest-mods",
            repo: "awards",
            path: "textures",
        });

        this.referenceRepo.fetch();
        this.init();
    }

    public init(): void {
        this.router.get("/:owner/:repo.svg", (req: Request, res: Response) => {
            const owner = req.params.owner as string;
            const repo = req.params.repo as string;

            this.fetchDetails(owner, repo).then((result) => {
                const color = ColorConverter.percentageToHexColor(result.percentage);
                request(`https://img.shields.io/badge/wards%20mod%20completion-${result.percentage}%25-${color}.svg`).pipe(res);
            }).catch((error) => {
                res.status(400).json({ message: `${repo} is not a mod!` });
            });
        });

        this.router.get("/:owner/:repo", (req: Request, res: Response) => {
            const owner = req.params.owner as string;
            const repo = req.params.repo as string;

            this.fetchDetails(owner, repo).then((result) => {
                res.status(200).json(result);
            }).catch((error) => {
                res.status(400).json({ message: `${repo} is not a mod!` });
            });
        });
    }

    private fetchDetails(owner: string, repo: string, path: string = ""): Promise<ComputationSummary> {
        return new Promise<ComputationSummary>((resolve, reject) => {
            this.repoFileFetcher.fetch({
                owner: owner,
                repo: repo,
                path: path,
            }).then((files) => {
                this.referenceRepo.fetch().then((fileMap) => {
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
