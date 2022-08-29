import { A, Column, H3, P, Spacer } from "@riadh-adrani/recursive-web/html";
import { getVar } from "@riadh-adrani/recursive-web/style/methods";
import { getState } from "..";
import ButtonComponent from "./Button.component";

export default () => {
    const [show, setShow] = getState("show-about");

    return Column({
        flags: { renderIf: show },
        style: {
            scoped: true,
            normal: {
                position: "absolute",
                zIndex: 99,
                backgroundColor: "#00000077",
                alignItems: "center",
                justifyContent: "center",
                inset: 0,
                padding: "10px",
            },
        },
        onClick: () => {
            setShow(false);
        },
        children: [
            Column({
                style: {
                    inline: {
                        backgroundColor: getVar("dark"),
                        width: "300px",
                        alignItems: "center",
                        padding: ["20px", "10px"],
                        borderRadius: "2.5px",
                        boxShadow: ["0px", "0px", "5px", "0px", getVar("accent")],
                    },
                },
                onClick: (e) => e.stopPropagation(),
                children: [
                    H3({ children: "About" }),
                    P({ children: "Credits:" }),
                    A({
                        children: "Riadh Adrani",
                        href: "https://github.com/RiadhAdrani",
                        target: "_blank",
                    }),
                    Spacer({ height: "10px" }),
                    A({
                        children: "Yu-Gi-Oh! Card Maker",
                        href: "https://ygopro.org/yugioh-card-maker/",
                        target: "_blank",
                    }),
                    Spacer({ height: "20px" }),
                    ButtonComponent("Close", (e) => {
                        setShow(false);
                    }),
                ],
            }),
        ],
    });
};
