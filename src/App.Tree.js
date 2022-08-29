import { Column } from "@riadh-adrani/recursive-web/html";
import { renderRoute, setState } from ".";
import AppStyle from "./App.Style";
import AboutComponent from "./components/About.component";
import AppBarComponent from "./components/AppBar.component";

export default () => {
    AppStyle();

    setState("show-about", false);

    return Column({
        style: {
            scoped: true,
            normal: {
                height: "100vh",
                overflow: "hidden",
            },
        },
        children: [AppBarComponent(), renderRoute(), AboutComponent()],
    });
};
