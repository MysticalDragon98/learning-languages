import { log } from "termx";
import { ChineseWord } from "../../types/ChineseWord.type";
import getDbWord from "./getDbWord";
import { WordModel } from "../../db/models/word.model";

export default async function ensureWordInDb (word: ChineseWord, meaning?: string) {
    const dbWord = await getDbWord(word);
    
    if (dbWord) {
        return dbWord;
    }

    log(`Adding word: ${word} to database...`);

    return await WordModel.create({
        word,
        meaning,
        sentences: [],
        score: 0
    });
}