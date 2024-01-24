import Footnote from "../../interfaces/Footnote.interface";

export default function parseFootnotes (str: string): Footnote[] {
    const footnotes = [];
    const lines = str.split("\r").map(x => x.trim());

    for (const line of lines) {
        const match = <any>/【(?<pronuntiation>.+?)】(?<hanzi>.+?)：(?<legend>.+)$/.exec(line);

        if (!match) continue;
        
        footnotes.push({ ...match.groups } as Footnote);
    }

    return footnotes;
}
