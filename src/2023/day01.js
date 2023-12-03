import {wordsToNumbers} from 'words-to-numbers';

export function p1(lines){
    return lines.reduce((acc, line) =>{
        const chars = [...line];
        const first = chars.find(item => !isNaN(item));
        const last = chars.findLast(item => !isNaN(item));
        return acc += parseInt(`${first}${last}`);
    },0);
}

export function p2(lines){
    const nums = "zero one two three four five six seven eight nine".split(' ');
    const regex = new RegExp(nums.join('|'), 'g');
    const newLines = lines.map(line => {
            return line.replace(regex, (match) =>{
                return wordsToNumbers(match);
            });
    });
    return p1(newLines);
}