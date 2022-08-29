import Normal from "../assets/Normal.png";
import Effect from "../assets/Effect.png";
import Fusion from "../assets/Fusion.png";
import Ritual from "../assets/Ritual.png";
import Spell from "../assets/Spell.png";
import Synchro from "../assets/Synchro.png";
import Token from "../assets/Token.png";
import Trap from "../assets/Trap.png";
import Xyz from "../assets/Xyz.png";
import Level from "../assets/star.png";

function templateConfig({
    templateURL,
    level = { x: 421 - 60, y: 73, size: 25, url: Level },
    title = {
        x: 30,
        y: 55,
        width: 350,
        height: 50,
        fontSize: "25px",
        fontWeight: "bold",
        textAlign: "left",
        textDirection: "ltr",
        color: "#000",
    },
    id = {
        x: 421 - 45,
        y: 453,
        width: 350,
        height: 50,
        fontSize: "12px",
        fontWeight: "normal",
        textAlign: "right",
        textDirection: "rtl",
        color: "#000",
    },
    type = {
        x: 30,
        y: 480,
        width: 350,
        height: 50,
        fontSize: "18px",
        fontWeight: "bold",
        textAlign: "left",
        textDirection: "ltr",
        color: "#000",
    },
    description = {
        x: 30,
        y: 500,
        width: 350,
        height: 65,
        fontSize: "15px",
        fontWeight: "normal",
        textAlign: "left",
        textDirection: "ltr",
        color: "#000",
    },
    attack = {
        x: 265,
        y: 576,
        width: 45,
        height: 65,
        fontSize: "15px",
        fontWeight: "normal",
        textAlign: "left",
        textDirection: "ltr",
        color: "#000",
    },
    defense = {
        x: 352,
        y: 576,
        width: 40,
        height: 65,
        fontSize: "15px",
        fontWeight: "normal",
        textAlign: "left",
        textDirection: "ltr",
        color: "#000",
    },
}) {
    return arguments[0];
}

const templates = {
    Normal: templateConfig({ templateURL: Normal }),
    Effect: templateConfig({ templateURL: Effect }),
    Fusion: templateConfig({ templateURL: Fusion }),
    Ritual: templateConfig({ templateURL: Ritual }),
    Spell: templateConfig({
        templateURL: Spell,
        title: { color: "#fff" },
        level: { y: -1000 },
        attack: { y: -1000 },
        defense: { y: -1000 },
        description: { y: 480, height: 105 },
        type: { y: 92.5, x: 421 - 45, fontSize: "20px", textAlign: "right", width: 320 },
    }),
    Synchro: templateConfig({ templateURL: Synchro }),
    Token: templateConfig({ templateURL: Token }),
    Trap: templateConfig({
        templateURL: Trap,
        title: { color: "#fff" },
        level: { y: -1000 },
        attack: { y: -1000 },
        defense: { y: -1000 },
        description: { y: 480, height: 105 },
        type: { y: 92.5, x: 421 - 45, fontSize: "20px", textAlign: "right", width: 320 },
    }),
    Xyz: templateConfig({ templateURL: Xyz, title: { color: "#fff" }, id: { color: "#fff" } }),
};

export const templateOptions = Object.keys(templates).map((key) => [
    key,
    templates[key].templateURL,
]);

export const cardJSON = () => {
    return {
        template: templateOptions[0],
        img: "",
        title: "Card Name",
        level: 5,
        id: "RA-7010",
        type: "Type",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
            "\nAenean ornare odio sed elit elementum lacinia." +
            "\nNam egestas, mauris et ultrices finibus, nisi odio pharetra purus",
        attack: "1000",
        defense: "2000",
    };
};

export const cardJSONDetails = [
    [
        "template",
        "Should be one of the following values : " +
            templateOptions.map((item) => `"${item[0]}"`).join(", ") +
            " .",
    ],
    ["img", "String representing the image url."],
    ["title", "String"],
    ["level", "Integer between 0 and 14"],
    ["id", "String"],
    ["type", "String"],
    [
        "description",
        "String representing the description. Each line should be delimited by a return to line \\n",
    ],
    ["attack", "Integer"],
    ["defense", "Integer"],
];

export default templates;
