import File from "../../interfaces/File.interface";
import { HanziCharacter } from "../../types/HanziCharacter.type";
import getWordDistribution from "./getWordDistribution";

const EXCLUDED_CHARACTERS = ["。", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "，", " ", "？", "！", "～", "—", String.fromCharCode(65532) ];

export default function getWordDistributionInFile (file: File, sorted?: boolean) {
    const distribution: Map<HanziCharacter, number> = new Map();

    for (const dialog of file.dialogs) {
        const lineDistribution = getWordDistribution(dialog.dialog);

        for (const character in lineDistribution) {
            if (EXCLUDED_CHARACTERS.includes(character)) continue;
            
            if (!distribution.get(character as HanziCharacter)) distribution.set(character as HanziCharacter, 0);

            distribution.set(character as HanziCharacter, distribution.get(character as HanziCharacter) + lineDistribution[character]);
        }
    }

    if (sorted) {
        return new Map([...distribution.entries()].sort((a, b) => b[1] - a[1]));
    }

    return distribution;
}
