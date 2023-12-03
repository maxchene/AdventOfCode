import {wordsToNumbers} from 'words-to-numbers';

export function p1(lines){
    let ans = 0;
    lines.forEach(line => {
        const chars = [...line];
        const first = chars.find(item => !isNaN(item));
        const last = chars.findLast(item => !isNaN(item));
        ans += parseInt(`${first}${last}`);
    });
    return ans;
}



export function p2(lines){
    const nums = "zero one two three four five six seven eight nine".split(' ');
    const regex = new RegExp(nums.join('|'), 'gi');
    const newLines = lines.map(line => {
            return line.replace(regex, (match) =>{
                return wordsToNumbers(match);
            });
    });
    return p1(newLines);
}