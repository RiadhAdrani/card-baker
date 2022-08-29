import { cardJSON, templateOptions } from "../card";

async function resolveImg(url) {
    if (!url.trim()) return "";

    const res = await fetch(url);
    const imgBlob = await res.blob();

    const reader = new FileReader();

    const dataURL = await new Promise((resolve, reject) => {
        reader.onload = () => {
            const base64data = reader.result;
            resolve(base64data);
        };

        reader.readAsDataURL(imgBlob);
    });

    return dataURL;
}

async function validateObject(object) {
    if (typeof object != "object") return false;

    const keys = Object.keys(cardJSON());

    for (let key of keys) {
        if (object[key] == undefined) {
            return false;
        }
    }

    object.img = await resolveImg(object.img);

    const temp = templateOptions.find((item) => item[0] === object.template);

    object.template = temp || templateOptions[0];

    return object;
}

/**
 *
 * @param {Array<object>} json
 * @returns
 */
export async function buildListFromJson(json) {
    const output = {
        data: [],
        message: "JSON imported successfully",
    };

    if (Array.isArray(json) == false) {
        output.message = "JSON content is not an array of objects.";
        return output;
    }

    let badItems = [];

    for (let index in json) {
        const res = await validateObject(json[index]);

        if (res == false) {
            badItems.push(index);
        } else {
            output.data.push(res);
        }
    }

    if (badItems.length != 0) {
        output.message =
            "Objects converted, but some elements are missing a number of keys : " +
            badItems.join(",") +
            ".";
    }

    return output;
}
