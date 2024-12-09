export const createStartWindow = (context: any, width: number, height: number) => {
    context.fillStyle = "#000005";
    context.fillRect(0, 0, width, height);
    context.stroke();
}