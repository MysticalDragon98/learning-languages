import { readFile } from "fs/promises";

let FILEPATH = "lib/data/characters.json";
let _characters: { [key: string]: string[] } = null as any;

export default async function getCharactersData () {
    if (_characters) return _characters;
    
    const content = await readFile(FILEPATH, "utf-8");
    _characters = JSON.parse(content);

    return _characters;
}
