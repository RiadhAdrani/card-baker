import { TextArea } from "@riadh-adrani/recursive-web/html";
import { getVar } from "@riadh-adrani/recursive-web/style/methods";

export default (text, props) => {
    return TextArea({
        ...props,
        children: text,
        style: {
            scoped: true,
            normal: {
                background: "inherit",
                color: "inherit",
                fontFamily: "inherit",
                padding: ["5px", "10px"],
                resize: "vertical",
            },
            hover: {
                boxShadow: ["0px", "0px", "2px", "2px", getVar("accent")],
            },
            focus: {
                outline: ["1px", "solid", "white"],
            },
        },
    });
};
