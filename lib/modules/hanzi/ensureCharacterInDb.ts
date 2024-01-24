import { log } from "termx";
import { HanziModel } from "../../db/models/hanzi.model";
import { HanziCharacter } from "../../types/HanziCharacter.type";
import getDbCharacter from "./getDbCharacter";
import getHanziPronuntiations from "./getHanziPronuntiations";

export default async function ensureCharacterInDb (character: HanziCharacter) {
    const dbCharacter = await getDbCharacter(character);
    
    if (dbCharacter) {
        return dbCharacter;
    }

    log(`Adding character: ${character} to database...`);

    return await HanziModel.create({
        character,
        meaning: "",
        pinyin: await getHanziPronuntiations(character),
        sentences: [],
        score: 0
    });
}
