import HomeView from "./views/Home.View";
import ImportView from "./views/Import.View";

export default {
    path: "/",
    component: HomeView,
    title: "Game Card Maker",
    routes: [{ path: "import", component: ImportView }],
};
