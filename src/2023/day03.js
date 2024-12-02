export function p1(lines) {
    const linesSymbolIdx = lines.map(line => {
        return [...line.matchAll(new RegExp(/[^.\d]/, 'g'))]
            .map(match => match.index);
    });

    const nums = lines
        .map((line, index) => {
            return [...line.matchAll(new RegExp(/\d+/, 'g'))]
                .map(match => ({
                    lineIndex: index,
                    value: parseInt(match.at(0)),
                    checkStart: Math.max(0, match.index - 1),
                    checkEnd: Math.min(match.index + match.at(0).length, line.length)
                }));
        })
        .filter(lineResult => lineResult.length > 0)
        .flat();
    console.log(nums);
    console.log(linesSymbolIdx);
    return nums.reduce((acc, current) => {
        const isPartNumber = true;
        const lineIdx = [current.lineIndex, current.lineIndex - 1, current.lineIndex + 1]
            .filter(idx => idx >= 0 && idx <= linesSymbolIdx.length - 1)
            .map(idx => linesSymbolIdx.at(idx));
        console.log(lineIdx);
    }, 0);
}

export function p2(lines) {
    return 1;
}