import { HanziModel } from "../../../db/models/hanzi.model";

export default async function all () {
    return await HanziModel.find();
}
