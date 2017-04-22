import * as GitHubApi from "github";
import { RepoFileFetcher } from "./";

export class ReferenceRepo {

    private filesPromise: Promise<Map<string, GithubFile>>;

    constructor(private fileFetcher: RepoFileFetcher, private params: GitHubApi.ReposGetContentParams) {
    }

    public fetch(): Promise<Map<string, GithubFile>> {
        if (this.filesPromise) {
            return this.filesPromise;
        }
        this.filesPromise = new Promise<Map<string, GithubFile>>((resolve, reject) => {
            const map = new Map<string, GithubFile>();

            this.fileFetcher.fetch(this.params).then((files) => {
                for (const file of files.values()) {
                    map.set(file.name, file);
                }
                resolve(map);
            }).catch((err) => {
                console.error(err);
                reject(err);
            });
        });

        return this.filesPromise;
    }
}
