import { Request, Response, Router } from "express";
import { ReferenceRepo, RepoFileFetcher } from "../../github";

export class BadgeRouter {
    public router: Router;

    constructor(private repoFileFetcher: RepoFileFetcher, private referenceRepo: ReferenceRepo) {
        this.router = Router();
        this.init();
    }

    public init(): void {
        this.router.get("/:owner/:repo", (req: Request, res: Response) => {
            const owner = req.params.owner as string;
            const repo = req.params.repo as string;

            this.repoFileFetcher.fetch({
                owner: owner,
                repo: repo,
                path: "",
            }).then((files) => {
                this.referenceRepo.fetch().then((fileMap) => {
                    let successfulFiles: number = 0;
                    const missingFiles: string[] = new Array<string>();

                    for (const file of files.data) {
                        if (fileMap.has(file.name)) {
                            successfulFiles++;
                            continue;
                        }
                        missingFiles.push(file.name);
                    }

                    res.status(200).json({
                        percentage: Math.round((successfulFiles / fileMap.size) * 100).toPrecision(2),
                        numberTexturesMissing: fileMap.size - successfulFiles,
                        missingFiles: missingFiles,
                    });
                });
            });
        });
    }
}
