import { Column, Row } from "@riadh-adrani/recursive-web/html";
import CardComponent from "../components/Card.component";
import OptionsComponent from "../components/Options.component";
import CardController from "../controllers/Card.controller";

export default () => {
    CardController();

    return Row({
        style: { inline: { flex: 1, padding: ["20px"], height: "90%" } },
        children: [
            Column({
                style: {
                    scoped: true,
                    normal: {
                        width: "40%",
                    },
                },
                children: CardComponent(),
            }),
            OptionsComponent(),
        ],
    });
};
