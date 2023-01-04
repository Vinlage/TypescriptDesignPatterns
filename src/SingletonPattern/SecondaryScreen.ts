import { DialogBox } from "./DialogBox";

export class SecondaryScreen {
    public showDialog() {
        let dialog = DialogBox.getInstance();
        dialog.showDialog("Mensagem da tela secundária");
    }
}