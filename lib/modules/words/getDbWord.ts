import { WordModel } from "../../db/models/word.model";
import { ChineseWord } from "../../types/ChineseWord.type";

export default async function getDbWord (word: ChineseWord) {
    return await WordModel.findOne({ word });
}
