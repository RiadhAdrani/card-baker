import { Input } from "@riadh-adrani/recursive-web/html";
import { getVar } from "@riadh-adrani/recursive-web/style/methods";

export default (value, props) => {
    return Input({
        ...props,
        value,
        style: {
            scoped: true,
            normal: {
                backgroundColor: "inherit",
                color: "inherit",
                padding: ["7.5px", "10px"],
                border: ["1px", "solid", getVar("accent")],
            },
            hover: {
                boxShadow: ["0px", "0px", "2px", "2px", getVar("accent")],
            },
            focus: {
                outline: ["1px", "solid", "white"],
            },
            fileSelectorButton: {
                background: getVar("accent"),
                color: "white",
                border: "none",
                padding: ["5px", "10px"],
            },
        },
    });
};
