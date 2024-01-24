import { HanziCharacter } from "../../types/HanziCharacter.type";
import getCharactersData from "../data/getCharactersData";

export default async function getSentenceCharacters (sentence: string) {
    const charactersData = await getCharactersData();
    
    return new Set(sentence.split("").filter(chara => !!charactersData[chara]) as HanziCharacter[]);
}
