import { Request, Response, Router } from "express";
import * as request from "request";
import { ReferenceRepo, RepoFileFetcher } from "../../github";

export class ModRouter {
    public router: Router;

    constructor(private repoFileFetcher: RepoFileFetcher, private referenceRepo: ReferenceRepo) {
        this.router = Router();
        this.init();
    }

    public init(): void {
        this.router.get("/:owner/:repo.svg", (req: Request, res: Response) => {
            const owner = req.params.owner as string;
            const repo = req.params.repo as string;

            this.fetchDetails(owner, repo, "textures").then((result) => {
                request(`https://img.shields.io/badge/texture%20pack%20completion-${result.percentage}%25-green.svg`).pipe(res);
            }).catch((error) => {
                res.status(400).json({ message: `${repo} is not a mod!` });
            });
        });

        this.router.get("/:owner/:repo", (req: Request, res: Response) => {
            const owner = req.params.owner as string;
            const repo = req.params.repo as string;

            this.fetchDetails(owner, repo, "textures").then((result) => {
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
