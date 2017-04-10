import * as GitHubApi from "github";

export class RepoFileFetcher {
    private githubApi: GitHubApi;

    constructor() {
        this.githubApi = new GitHubApi({
            debug: true,
            protocol: "https",
            headers: {
                "user-agent": "minetest-texture-pack-checker",
            },
            timeout: 5000,
        });
    }

    public fetch(params: GitHubApi.ReposGetContentParams): Promise<Map<string, GithubFile>> {
        return new Promise<Map<string, GithubFile>>((resolve, reject) => {
            this.githubApi.repos.getContent(params, (err, files: GithubFileResponse) => {
                if (err !== null) {
                    console.error("something went wrong");
                    console.error(err);
                    reject(err);
                    return;
                }
                const result = new Map<string, GithubFile>();
                for (const file of files.data) {
                    result.set(file.name, file);
                }
                resolve(result);
            });
        });
    }
}
