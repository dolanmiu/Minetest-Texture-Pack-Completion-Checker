export class ColorConverter {
    public static percentageToHexColor(percentage: number): string {
        const green = Math.floor((255 / 100) * percentage);
        const hex = this.componentToHex(255 - green) + this.componentToHex(green) + this.componentToHex(0);
        return hex;
    }

    private static componentToHex(c: number): string {
        const hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }
}
