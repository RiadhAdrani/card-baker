import { Column, Row, Spacer } from "@riadh-adrani/recursive-web/html";
import LabelComponent from "./Label.component";

export default (label, component) => {
    return Column({
        style: { scoped: true, normal: { padding: ["5px", "0px"] } },
        children: [LabelComponent(label), Spacer({ height: "5px" }), component],
    });
};
