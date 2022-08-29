import { H2, H4, Link, Row, Spacer } from "@riadh-adrani/recursive-web/html";
import { getVar } from "@riadh-adrani/recursive-web/style/methods";
import { getState } from "..";
import ButtonComponent from "./Button.component";

export default () => {
    const [get, set] = getState("show-about");

    return Row({
        style: {
            scoped: true,
            normal: {
                padding: ["10px", "15px"],
                backgroundColor: getVar("dark"),
                justifyContent: "space-between",
                alignItems: "center",
            },
        },
        children: [
            H2({ children: "Game Card Maker" }),
            Row({
                children: [
                    Link({ children: ButtonComponent("Home"), href: "/" }),
                    Spacer({ width: "10px" }),
                    Link({ children: ButtonComponent("JSON"), href: "/import" }),
                ],
            }),
            ButtonComponent("About", () => set(true)),
        ],
    });
};
