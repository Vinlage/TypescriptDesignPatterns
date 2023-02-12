import { EncodeExpression } from "./EncodeExpression";
import type { IExpression } from "./interface/IExpression";
import { DecodeExpression } from "./DecodeExpression";

export function interpret(input: string) {
    const list: IExpression[] = [];

    list.push(new EncodeExpression());
    list.push(new DecodeExpression());

    list.map(e => e.interpret(input));
}