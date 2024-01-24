import { HanziModel } from "../../../db/models/hanzi.model";

export default async function byLowestScore (randomness: number = 0.2) {
    const all = await HanziModel.find().sort({ score: 1 });

    return all.sort(() => Math.random() - randomness);
}
