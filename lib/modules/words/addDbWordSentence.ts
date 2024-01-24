import { WordModel } from "../../db/models/word.model";
import { ChineseWord } from "../../types/ChineseWord.type";
import ensureWordInDb from "./ensureWordInDb";

export default async function addDbWordSentence (word: ChineseWord, sentence: string) {
    const dbCharacter = await ensureWordInDb(word);

    if (!dbCharacter.sentences.includes(sentence)) {
        await WordModel.updateOne({ word }, { $push: { sentences: sentence } });
    }

    return dbCharacter;
}
