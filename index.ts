import { initDatabaseConnection } from "./lib/db";
import loadFile from "./lib/modules/core/loadFile";
import getWordDistributionInFile from "./lib/modules/stats/getWordDistributionInFile";
import ensureCharacterInDb from "./lib/modules/hanzi/ensureCharacterInDb";
import addDbCharacterSentence from "./lib/modules/hanzi/addDbCharacterSentence";
import { HanziCharacter } from "./lib/types/HanziCharacter.type";
import getSentenceCharacters from "./lib/modules/utils/getSentenceCharacters";
import { initHTTPServer } from './lib/http';
import addDbWordSentence from "./lib/modules/words/addDbWordSentence";
import ensureWordInDb from "./lib/modules/words/ensureWordInDb";
//* Imports
async function main () {
    await Promise.all([
        initDatabaseConnection(),
        initHTTPServer(),
        //* Main
    ]);

    //* Post Main

    const file = await loadFile(".book/index.txt");

    for (const note of file.footnotes) {
        await ensureWordInDb(note.hanzi, note.legend)
    }

    for (const dialog of file.dialogs) {
        const characters = await getSentenceCharacters(dialog.dialog);

        for (const chara of characters) {
            await addDbCharacterSentence(chara, dialog.dialog);
        }

        for (const note of file.footnotes) {
            if (dialog.dialog.includes(note.hanzi)) {
                await addDbWordSentence(note.hanzi, dialog.dialog);
            }
        }
    }
}

main();

process.on('uncaughtException', console.log);
process.on('unhandledRejection', console.log);