import { Column } from "@riadh-adrani/recursive-web/html";
import { getVar } from "@riadh-adrani/recursive-web/style/methods";

export default (show = false, content) => {
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
        children: [
            Column({
                style: {
                    inline: {
                        backgroundColor: getVar("dark"),
                        width: "400px",
                        alignItems: "center",
                        padding: ["20px", "10px"],
                        borderRadius: "2.5px",
                        boxShadow: ["0px", "0px", "5px", "0px", getVar("accent")],
                    },
                },
                children: content,
            }),
        ],
    });
};
