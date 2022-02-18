export class Cars {
    private year: string;
    public get Year(): string {
        return this.year;
    }
    public set Year(value: string) {
        this.year = value;
    }
    private carMarque: string;
    public get CarMarque(): string {
        return this.carMarque;
    }
    public set CarMarque(value: string) {
        this.carMarque = value;
    }
    private carModel: string;
    public get CarModel(): string {
        return this.carModel;
    }
    public set CarModel(value: string) {
        this.carModel = value;
    }
    private carAlimentationLabel: string;
    public get CarAlimentationLabel(): string {
        return this.carAlimentationLabel;
    }
    public set CarAlimentationLabel(value: string) {
        this.carAlimentationLabel = value;
    }
    private carCvNumber: string;
    public get CarCvNumber(): string {
        return this.carCvNumber;
    }
    public set CarCvNumber(value: string) {
        this.carCvNumber = value;
    }
    private carVersion: string;
    public get CarVersion(): string {
        return this.carVersion;
    }
    public set CarVersion(value: string) {
        this.carVersion = value;
    }

    private carCarrosserie: string;
    public get CarCarrosserie(): string {
        return this.carCarrosserie;
    }
    public set CarCarrosserie(value: string) {
        this.carCarrosserie = value;
    }

}