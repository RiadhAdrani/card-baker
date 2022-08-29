import { setState } from "..";
import card, { cardJSON } from "../card";

export default (id = "main", data = cardJSON()) => {
    const templateOptions = Object.keys(card).map((key) => [key, card[key].templateURL]);

    const [value, setValue] = setState("card-data-" + id, data);

    function setTemplate(template) {
        setValue({ ...value, template });
    }

    function setImage(img) {
        setValue({ ...value, img });
    }

    function setFrame(frame) {
        setValue({ ...value, frame });
    }

    function setTitle(title) {
        setValue({ ...value, title });
    }

    function setLevel(level) {
        setValue({ ...value, level: parseInt(level) });
    }

    function setId(id) {
        setValue({ ...value, id });
    }

    function setType(type) {
        setValue({ ...value, type });
    }

    function setDescription(description) {
        setValue({ ...value, description });
    }

    function setAttack(attack) {
        setValue({ ...value, attack });
    }

    function setDefense(defense) {
        setValue({ ...value, defense });
    }

    function setRef() {
        return ref;
    }

    return {
        img: value.img,
        frame: value.frame,
        title: value.title,
        level: value.level,
        id: value.id,
        type: value.type,
        description: value.description,
        attack: value.attack,
        defense: value.defense,
        template: value.template,

        templateOptions,

        setTemplate,
        setImage,
        setFrame,
        setTitle,
        setLevel,
        setId,
        setType,
        setDescription,
        setAttack,
        setDefense,
    };
};
