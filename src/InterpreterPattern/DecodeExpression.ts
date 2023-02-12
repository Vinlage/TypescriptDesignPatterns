import type { IExpression } from "./interface/IExpression";

export class DecodeExpression implements IExpression {
    interpret(input: string): void {
        if (input[0] != '-') return;
        let text = input;
        let outputText = [];
        for(let i = 1; i < text.length; i++) {
            outputText[i] = String.fromCharCode(text[i].charCodeAt(0) - 1)
        }
        text = outputText.join('');
        console.log("Expression decoded: ", text);
    }
}