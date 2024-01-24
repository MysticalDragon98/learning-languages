import { HanziModel } from "../../db/models/hanzi.model";
import { HanziCharacter } from "../../types/HanziCharacter.type";

export default async function getDbCharacter (character: HanziCharacter) {
    return await HanziModel.findOne({ character });
}
