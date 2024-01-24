import { HanziCharacter } from "../../types/HanziCharacter.type";
import getCharactersData from "../data/getCharactersData";

export default async function getHanziPronuntiations (hanzi: HanziCharacter): Promise<string[]> {
    const characters = await getCharactersData();

    return characters[hanzi] || [];
}
