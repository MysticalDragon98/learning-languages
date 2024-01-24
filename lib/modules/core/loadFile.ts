import { readFile } from "fs/promises";
import parseFootnotes from "../parsers/parseFootnotes";
import parseDialog from "../parsers/parseDialog";
import File from "../../interfaces/File.interface";

export default async function loadFile (path: string) {
    const file = await readFile(path, "utf-8");
    const lines = file.split("\n").filter(line => line.trim().length > 0);
    const footnotes = parseFootnotes(lines[lines.length - 1]);
    const dialogs = lines
        .map((x, i) => parseDialog(i === lines.length -1? x.substring(0, x.indexOf("【")).trim() : x))
        .filter(x => x && Object.keys(x).length > 0);
    const characters = [];

    for (const dialog of dialogs) if (!characters.includes(dialog.speaker)) characters.push(dialog.speaker);

    return <File>{
        footnotes,
        dialogs,
        participants: characters
    }
}
