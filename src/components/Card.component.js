import { Canvas } from "@riadh-adrani/recursive-web/html";
import star from "../assets/star.png";
import CardController from "../controllers/Card.controller";
import { drawImage, drawText } from "../painter";
import cards, { cardJSON } from "../card";

export default (id = "main", data = cardJSON()) => {
    const controller = CardController(id, data);

    const ref = "canvas" + id;

    /**
     *
     * @param {HTMLCanvasElement} canvas
     */
    async function update(canvas) {
        const context = canvas.getContext("2d");

        const items = [
            { url: controller.template[1], x: 0, y: 0, width: 421, height: 614 },
            {
                url: controller.img,
                x: 47,
                y: 109,
                width: 326,
                height: 326,
            },
            {
                url: star,
                x: 421 - 60,
                y: 73,
                width: 25,
                height: 25,
                number: controller.level,
                ...cards[controller.template[0]].level,
            },
            {
                text: controller.title,
                x: 30,
                y: 55,
                width: 350,
                height: 50,
                fontSize: "25px",
                fontWeight: "bold",
                textAlign: "left",
                textDirection: "ltr",
                ...cards[controller.template[0]].title,
            },
            {
                text: controller.id,
                x: 421 - 45,
                y: 453,
                width: 350,
                height: 50,
                fontSize: "12px",
                fontWeight: "normal",
                textAlign: "right",
                textDirection: "rtl",
                ...cards[controller.template[0]].id,
            },
            {
                text: `[${controller.type}]`,
                x: 30,
                y: 480,
                width: 350,
                height: 50,
                fontSize: "18px",
                fontWeight: "bold",
                textAlign: "left",
                textDirection: "ltr",
                ...cards[controller.template[0]].type,
            },
            {
                text: controller.description,
                x: 30,
                y: 500,
                width: 350,
                height: 65,
                fontSize: "15px",
                fontWeight: "normal",
                textAlign: "left",
                textDirection: "ltr",
                ...cards[controller.template[0]].description,
            },
            {
                text: controller.attack,
                x: 265,
                y: 576,
                width: 45,
                height: 65,
                fontSize: "15px",
                fontWeight: "normal",
                textAlign: "left",
                textDirection: "ltr",
                ...cards[controller.template[0]].attack,
            },
            {
                text: controller.defense,
                x: 352,
                y: 576,
                width: 40,
                height: 65,
                fontSize: "15px",
                fontWeight: "normal",
                textAlign: "left",
                textDirection: "ltr",
                ...cards[controller.template[0]].defense,
            },
        ];

        const resolved = await Promise.all(
            items.map(
                (item) =>
                    new Promise((resolve, reject) => {
                        if (item.url) {
                            const obj = new Image();
                            obj.src = item.url;

                            obj.onload = () => {
                                resolve({ obj, ...item });
                            };
                        } else {
                            resolve({ obj: item.text, ...item });
                        }
                    })
            )
        );

        resolved.forEach((item) => {
            if (item.url !== undefined) {
                drawImage(context, item);
            } else {
                drawText(context, item, item.color || "#000");
            }
        });
    }

    return Canvas({
        hooks: {
            onRef: (canvas) => {
                update(canvas);
                return ref;
            },
        },
        crossOrigin: "anonymous",
        width: 421,
        height: 614,
        style: {
            scoped: true,
            normal: {
                boxShadow: ["0", "2px", "4px", "#000"],
                maxHeight: "100%",
                maxWidth: "78%",
                display: "block",
                margin: [0, "auto"],
                cursor: "alias",
            },
        },
    });
};
