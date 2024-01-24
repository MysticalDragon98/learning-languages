import { HanziCharacter } from "../../types/HanziCharacter.type";
import getHanziPronuntiations from "./getHanziPronuntiations";

export default async function getHanziPronuntiation (hanzi: HanziCharacter) {
    return (await getHanziPronuntiations(hanzi))[0];
}
