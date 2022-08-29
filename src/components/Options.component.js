import { Column, Option, Select, TextArea } from "@riadh-adrani/recursive-web/html";
import CardController from "../controllers/Card.controller";
import InputComponent from "./Input.component";
import OptionItemComponent from "./OptionItem.component";
import TextAreaComponent from "./TextArea.component";
import SelectComponent from "./Select.component";

export default () => {
    const controller = CardController();

    return Column({
        style: {
            scoped: true,
            normal: {
                flex: 1,
                alignItems: "stretch",
                overflowY: "auto",
                padding: [0, "10px"],
            },
        },
        children: [
            OptionItemComponent(
                "Template",
                SelectComponent({
                    children: controller.templateOptions.map((item) =>
                        Option({ children: item[0] })
                    ),
                    onChange: (e) => {
                        const maybeTemplate = controller.templateOptions.find(
                            (t) => t[0] == e.target.value
                        );

                        if (maybeTemplate) {
                            controller.setTemplate(maybeTemplate);
                        }
                    },
                })
            ),
            OptionItemComponent(
                "Title",
                InputComponent(controller.title, {
                    onInput: (e) => {
                        controller.setTitle(e.target.value);
                    },
                })
            ),
            OptionItemComponent(
                "Level",
                InputComponent(controller.level, {
                    type: "number",
                    max: 12,
                    onInput: (e) => {
                        controller.setLevel(e.target.value);
                    },
                })
            ),
            OptionItemComponent(
                "Image",
                InputComponent("", {
                    type: "file",
                    accept: "image/*",
                    onChange: (e) => {
                        controller.setImage(URL.createObjectURL(e.target.files[0]));
                    },
                })
            ),
            OptionItemComponent(
                "ID",
                InputComponent(controller.id, {
                    onInput: (e) => controller.setId(e.target.value),
                })
            ),
            OptionItemComponent(
                "Type",
                InputComponent(controller.type, {
                    onInput: (e) => controller.setType(e.target.value),
                })
            ),
            OptionItemComponent(
                "Description",
                TextAreaComponent(controller.description, {
                    onInput: (e) => controller.setDescription(e.target.value),
                })
            ),
            OptionItemComponent(
                "Attack",
                InputComponent(controller.attack, {
                    type: "number",
                    onInput: (e) => controller.setAttack(e.target.value),
                })
            ),
            OptionItemComponent(
                "Defense",
                InputComponent(controller.defense, {
                    type: "number",
                    onInput: (e) => controller.setDefense(e.target.value),
                })
            ),
        ],
    });
};
