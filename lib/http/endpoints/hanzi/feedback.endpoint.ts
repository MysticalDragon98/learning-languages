import { HanziModel } from "../../../db/models/hanzi.model";
import ensureCharacterInDb from "../../../modules/hanzi/ensureCharacterInDb";
import { HanziCharacter } from "../../../types/HanziCharacter.type";

export default async function feedback (hanzi: HanziCharacter, feedback: "positive" | "negative") {
    if (hanzi.length !== 1) return;
    await ensureCharacterInDb(hanzi);

    await HanziModel.updateOne({ character: hanzi }, {
        $inc: {
            score: feedback === "positive" ? 1 : -1
        }
    });
}
