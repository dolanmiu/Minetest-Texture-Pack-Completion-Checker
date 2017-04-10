import { RepoFileFetcher } from "./";

export class ReferenceRepo {

    private filesPromise: Promise<Map<string, GithubFile>>;

    constructor(private fileFetcher: RepoFileFetcher) {
    }

    public fetch(): Promise<Map<string, GithubFile>> {
        if (this.filesPromise) {
            return this.filesPromise;
        }
        this.filesPromise = new Promise<Map<string, GithubFile>>((resolve, reject) => {
            const map = new Map<string, GithubFile>();

            this.fileFetcher.fetch({
                owner: "tobyplowy",
                repo: "Vanilla-32x32",
                path: "",
            }).then((files) => {
                for (const file of files.data) {
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
