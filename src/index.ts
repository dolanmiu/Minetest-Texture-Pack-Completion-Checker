import * as logger from "winston";
import { AwardsRouter } from "./api/awards";
import { CoreRouter } from "./api/core";
import { FarmingRouter } from "./api/farming";
import { ModRouter } from "./api/mod";
import { NetherRouter } from "./api/nether";
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
    app.use("/awards", new AwardsRouter(repoFileFetcher).router);
    app.use("/nether", new NetherRouter(repoFileFetcher).router);
    app.use("/mod", new ModRouter(repoFileFetcher).router);
    app.use("/core", new CoreRouter(repoFileFetcher).router);
});

appWrapper.start();

process.on("uncaughtException", (exception: Error) => {
    logger.error(exception.toString());
    logger.info(`Server stopped because of: ${exception.message}`);
    throw exception;
});
