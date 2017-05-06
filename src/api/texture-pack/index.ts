import { Request, Response, Router } from "express";
import * as request from "request";
import { ReferenceRepo, RepoFileFetcher } from "../../github";
import { ColorConverter } from "../color-converter";
import { Fetcher } from "../fetcher";

export class TexturePackRouter {
    public router: Router;
    private referenceRepo: ReferenceRepo;
    private fetcher: Fetcher;

    constructor(private repoFileFetcher: RepoFileFetcher) {
        this.router = Router();
        this.referenceRepo = new ReferenceRepo(repoFileFetcher, {
            owner: "SummerFields",
            repo: "Summerfields-Minetest",
            path: "",
        });

        this.referenceRepo.fetch();
        this.fetcher = new Fetcher(this.repoFileFetcher, this.referenceRepo);

        this.init();
    }

    public init(): void {
        this.router.get("/:owner/:repo.svg", (req: Request, res: Response) => {
            const owner = req.params.owner as string;
            const repo = req.params.repo as string;

            this.fetcher.fetchDetails(owner, repo).then((result) => {
                const color = ColorConverter.percentageToHexColor(result.percentage);
                request(`https://img.shields.io/badge/texture%20pack%20completion-${result.percentage}%25-${color}.svg`).pipe(res);
            });
        });

        this.router.get("/:owner/:repo", (req: Request, res: Response) => {
            const owner = req.params.owner as string;
            const repo = req.params.repo as string;

            this.fetcher.fetchDetails(owner, repo).then((result) => {
                res.status(200).json(result);
            });
        });
    }
}
