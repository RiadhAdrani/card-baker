import {
    CenteredColumn,
    Column,
    Details,
    Dialog,
    Div,
    H1,
    H2,
    H3,
    H4,
    HorizontalLine,
    P,
    Row,
    Spacer,
    Span,
    Summary,
} from "@riadh-adrani/recursive-web/html";
import { repeat } from "@riadh-adrani/recursive-web/style/methods";
import FileSaver from "file-saver";
import JSZip from "jszip";
import { getRef, getState, setCache, setState, updateOn } from "..";
import { cardJSONDetails } from "../card";
import ButtonComponent from "../components/Button.component";
import CardComponent from "../components/Card.component";
import DialogComponent from "../components/Dialog.component";
import { buildListFromJson } from "../generate";

export default () => {
    const [data, setData] = setCache("imported-data", []);
    const [show, setShow] = setState("show-json-help", false);

    return CenteredColumn({
        style: {
            inline: {
                padding: ["20px", "10px"],
                overflow: "hidden",
            },
        },
        children: [
            H1({ children: "With JSON" }),
            Spacer({ height: "20px" }),
            Row({
                children: [
                    ButtonComponent("Pick JSON File", () => {
                        const input = document.createElement("input");
                        input.type = "file";
                        input.accept = "application/JSON";
                        input.onchange = (e) => {
                            const files = e.target.files;

                            const reader = new FileReader();

                            reader.onload = async (ev) => {
                                const result = await buildListFromJson(
                                    JSON.parse(ev.target.result)
                                );

                                updateOn(() => {
                                    data.forEach((item, index) => {
                                        getState("card-data-" + index)[1](result.data[index]);
                                    });

                                    setData(result.data);
                                });
                            };

                            if (files.length) {
                                reader.readAsText(files[0]);
                            }
                        };

                        input.click();
                    }),

                    Spacer({ width: "10px" }),
                    ButtonComponent("Download All", () => {
                        const items = [];

                        data.forEach((item, index) => {
                            items.push(getRef("canvas" + index));
                        });

                        if (items.length == 0) return;

                        const zip = new JSZip();

                        items.forEach((item, index) => {
                            const uri = item.toDataURL();
                            const idx = uri.indexOf("base64") + "base64,".length;
                            const content = uri.substring(idx);

                            zip.file(index + ".png", content, { base64: true });
                        });

                        zip.generateAsync({ type: "blob" }).then((content) => {
                            FileSaver.saveAs(content, "cards.zip");
                        });
                    }),
                ],
            }),
            Spacer({ height: "10px" }),
            ButtonComponent("About JSON structure", () => {
                setShow(!show);
            }),
            Spacer({ height: "10px" }),
            HorizontalLine({ color: "#454545", width: "80%", marginVertical: "20px" }),
            DialogComponent(
                show,
                CenteredColumn({
                    children: [
                        H2({ children: "Keys" }),
                        HorizontalLine({
                            color: "#454545",
                            width: "300px",
                            marginVertical: "10px",
                        }),
                        CenteredColumn({
                            style: { inline: { padding: ["10px"] } },
                            children: cardJSONDetails.map((key) => {
                                return Details({
                                    style: {
                                        inline: {
                                            textAlign: "center",
                                            marginBottom: "10px",
                                            cursor: "pointer",
                                        },
                                    },
                                    children: [
                                        Summary({
                                            children: key[0],
                                            style: {
                                                scoped: true,
                                                normal: {
                                                    padding: ["5px", "10px"],
                                                },
                                                hover: {
                                                    background: "#454545",
                                                },
                                            },
                                        }),
                                        Span({
                                            children: key[1],
                                            style: {
                                                scoped: true,
                                                normal: {
                                                    color: "#959595",
                                                },
                                            },
                                        }),
                                    ],
                                });
                            }),
                        }),
                        ButtonComponent("Close", () => setShow(false)),
                    ],
                })
            ),
            Div({
                style: {
                    inline: {
                        display: "grid",
                        gridTemplateColumns: repeat(4, "1fr"),
                        gridColumnGap: "15px",
                        gridRowGap: "15px",
                        overflowY: "auto",
                        flex: 1,
                    },
                },
                children: data.map((item, index) =>
                    Div({
                        children: CardComponent(index, item),
                    })
                ),
            }),
        ],
    });
};
