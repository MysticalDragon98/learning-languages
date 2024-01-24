export default function getWordDistribution (text: string) {
    const characterCount = {};
    
    for (const character of text) {
        if (!characterCount[character]) characterCount[character] = 0;

        characterCount[character]++;
    }

    return characterCount;
}
