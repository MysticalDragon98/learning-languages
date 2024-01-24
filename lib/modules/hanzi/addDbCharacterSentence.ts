import { HanziModel } from "../../db/models/hanzi.model";
import { HanziCharacter } from "../../types/HanziCharacter.type";
import ensureCharacterInDb from "./ensureCharacterInDb";

export default async function addDbCharacterSentence (character: HanziCharacter, sentence: string) {
    const dbCharacter = await ensureCharacterInDb(character);

    if (!dbCharacter.sentences.includes(sentence)) {
        await HanziModel.updateOne({ character }, { $push: { sentences: sentence } });
    }

    return dbCharacter;
}
