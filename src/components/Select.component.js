import { Select } from "@riadh-adrani/recursive-web/html";

import { getVar } from "@riadh-adrani/recursive-web/style/methods";

export default (props) => {
    return Select({
        ...props,
        style: {
            scoped: true,
            normal: {
                background: "inherit",
                color: "inherit",
                padding: ["5px", "10px"],
            },
            " option": {
                background: getVar("main"),
                color: "inherit",
                padding: ["5px", "10px"],
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
