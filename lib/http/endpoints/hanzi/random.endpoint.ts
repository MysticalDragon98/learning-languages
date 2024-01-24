import getDbRandomCharacter from "../../../modules/hanzi/getDbRandomCharacter";

export default async function randomHanziEndpoint (amount: number = 1) {
    return await getDbRandomCharacter(amount);
}
