export class DialogBox {
    private static instance: DialogBox;

    private constructor() {};

    public static getInstance() {
        if(!this.instance) {
            this.instance = new DialogBox();
        }
        return this.instance;
    }

    public showDialog(message: string) {
        console.log(`Dialog box: ${message}`);
    }
}