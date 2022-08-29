import { setStyle } from ".";
import { getVar } from "@riadh-adrani/recursive-web/style/methods";

export default () => {
    setStyle({
        var: {
            main: "#1e1e1e",
            dark: "#262626",
            accent: "#707070",
        },
        selectors: {
            "*": { boxSizing: "border-box" },
            "html, body": {
                margin: "0px",
                minHeight: "100vh",
                backgroundColor: getVar("main"),
                color: "white",
                fontFamily: "system-ui",
            },
            "h1,h2,h3,h4,h5,h6": {
                margin: "0px",
            },
            a: {
                color: "white",
                fontStyle: "italic",
            },
            "::-webkit-scrollbar": {
                width: "10px",
            },
            "::-webkit-scrollbar-track": {
                background: getVar("main"),
            },
            "::-webkit-scrollbar-thumb": {
                background: "white",
                borderRadius: "2.5px",
            },
            "::-webkit-scrollbar-thumb:hover": {
                background: getVar("accent"),
            },
            "::-webkit-scrollbar-thumb:active": {
                background: getVar("accent"),
            },
        },
    });
};
