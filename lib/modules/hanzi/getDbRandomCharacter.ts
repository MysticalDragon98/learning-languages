import { HanziModel } from "../../db/models/hanzi.model";

export default async function getDbRandomCharacter (amount: number) {
    return await HanziModel.aggregate([{ $sample: { size: amount }}])
}
