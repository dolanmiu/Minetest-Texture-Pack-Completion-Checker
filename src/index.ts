import * as logger from "winston";
import { FarmingRouter } from "./api/farming";
import { TexturePackRouter } from "./api/texture-pack";
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

appWrapper.configure((app) => {
    logger.info("Configuring application routes");
    app.use("/", new TexturePackRouter(repoFileFetcher).router);
    app.use("/farming", new FarmingRouter(repoFileFetcher).router);
});

appWrapper.start();

process.on("uncaughtException", (exception: Error) => {
    logger.error(exception.toString());
    logger.info(`Server stopped because of: ${exception.message}`);
    throw exception;
});
