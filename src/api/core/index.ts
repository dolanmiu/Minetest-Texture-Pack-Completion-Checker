import { Request, Response, Router } from "express";
import * as request from "request";
import { RepoFileFetcher } from "../../github";
import { ColorConverter } from "../color-converter";
import { CORE_FILES } from "./core-files";

export class CoreRouter {
    public router: Router;

    constructor(private repoFileFetcher: RepoFileFetcher) {
        this.router = Router();

        this.init();
    }

    public init(): void {
        this.router.get("/:owner/:repo.svg", (req: Request, res: Response) => {
            const owner = req.params.owner as string;
            const repo = req.params.repo as string;

            this.fetchDetails(owner, repo).then((result) => {
                const color = ColorConverter.percentageToHexColor(result.percentage);
                request(`https://img.shields.io/badgeminetest core-${result.percentage}%25-${color}.svg`).pipe(res);
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
                let successfulFiles: number = 0;
                const missingFiles: string[] = new Array<string>();

                for (const file of CORE_FILES) {
                    if (files.has(file)) {
                        successfulFiles++;
                        continue;
                    }
                    missingFiles.push(file);
                }

                resolve({
                    percentage: parseFloat(Math.round((successfulFiles / CORE_FILES.length) * 100).toPrecision(2)),
                    numberTexturesMissing: CORE_FILES.length - successfulFiles,
                    missingFiles: missingFiles,
                });
            }).catch((error) => {
                reject(error);
            });
        });
    }
}
