import { DialogBox } from "./DialogBox";

export class MainScreen {
    public showDialog() {
        let dialog = DialogBox.getInstance();
        dialog.showDialog("Mensagem da tela principal");
    }
}