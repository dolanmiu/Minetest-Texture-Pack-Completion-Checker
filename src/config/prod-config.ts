export class ProductionConfig implements IConfig {
    public port = process.env.PORT || 3000;
}
