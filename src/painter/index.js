/**
 *
 * @param {CanvasRenderingContext2D} context
 * @param {*} item
 * @returns
 */
function drawImage(context, item) {
    if (!item.url) return;
    if (typeof item.number == "number") {
        let x = item.x;
        for (let i = 0; i < item.number; i++) {
            context.drawImage(item.obj, x, item.y, item.width, item.height);
            x = x - item.width - 1;
        }
    } else {
        context.drawImage(item.obj, item.x, item.y, item.width, item.height);
    }
}

/**
 *
 * @param {CanvasRenderingContext2D} context
 * @param {*} item
 * @returns
 */
function drawText(context, item, color = "#000000") {
    const segments = item.obj.split("\n");

    let fontSize = parseInt(item.fontSize);

    if (segments.length * fontSize > item.height) {
        fontSize = item.height / segments.length;
    }

    context.font = `${item.fontWeight} ${fontSize}px Arial`;
    context.textAlign = item.textAlign;
    context.direction = item.textDirection;
    context.fillStyle = color;

    let y = item.y;
    for (let i = 0; i < segments.length; i++) {
        context.fillText(segments[i], item.x, y, item.width);

        y = y + fontSize;
    }
}

export { drawImage, drawText };
