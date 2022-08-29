import { Button } from "@riadh-adrani/recursive-web/html";

export default (text, onClick = () => {}) => {
    return Button({
        children: text,
        onClick,
        style: {
            scoped: true,
            normal: {
                padding: ["10px", "20px"],
                backgroundColor: "transparent",
                color: "inherit",
                border: ["1px", "solid", "#757575"],
                borderRadius: "2.5px",
                cursor: "pointer",
            },
            hover: {
                background: "#757575",
            },
        },
    });
};
