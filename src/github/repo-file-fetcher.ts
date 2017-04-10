import * as GitHubApi from "github";

export class RepoFileFetcher {
    private githubApi: GitHubApi;

    constructor() {
        this.githubApi = new GitHubApi({
            debug: true,
            protocol: "https",
            headers: {
                "user-agent": "minetest-texture-pack-badge",
            },
            timeout: 5000,
        });
    }

    public fetch(params: GitHubApi.ReposGetContentParams): Promise<GithubFileResponse> {
        return new Promise<GithubFileResponse>((resolve, reject) => {
            this.githubApi.repos.getContent(params, (err, files: GithubFileResponse) => {
                if (err !== null) {
                    console.error("something went wrong");
                    console.error(err);
                    reject(err);
                    return;
                }
                resolve(files);
            });
        });
    }
}
