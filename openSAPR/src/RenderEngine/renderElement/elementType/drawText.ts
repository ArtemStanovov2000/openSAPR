import { Text } from "../../../models/ElementsType/Text"

export const drawText = (context: any, text: Text) => {
    context.font = `${text.fontSize}px Verdana`;
    context.fillStyle = `${text.color}`;
    context.fillText(`${text.text}`, text.xStart, text.yStart);
}