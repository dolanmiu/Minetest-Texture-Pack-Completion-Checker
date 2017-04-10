import * as logger from "winston";
import { BadgeRouter } from "./api/badge";
import { ApplicationWrapper } from "./bootstrap/application-wrapper";
import { DevelopmentConfig, ProductionConfig } from "./config/index";
import { ReferenceRepo, RepoFileFetcher } from "./github";

let config: IConfig;

if (process.env.NODE_ENV === "development") {
    config = new DevelopmentConfig();
} else {
    config = new ProductionConfig();
}

const appWrapper = new ApplicationWrapper(config);
const repoFileFetcher = new RepoFileFetcher();
const referenceRepo = new ReferenceRepo(repoFileFetcher);
referenceRepo.fetch();

appWrapper.configure((app) => {
    logger.info("Configuring application routes");
    app.use("/badge", new BadgeRouter(repoFileFetcher, referenceRepo).router);
});

appWrapper.start();

process.on("uncaughtException", (exception: Error) => {
    logger.error(exception.toString());
    logger.info(`Server stopped because of: ${exception.message}`);
    throw exception;
});
