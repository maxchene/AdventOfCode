export function p1(lines) {
    return lines
        .map(line => line.split(' '))
        .map(line => line.map(item => parseInt(item)))
        .filter(isGood)
        .length;
}

export function p2(lines) {
    return lines
        .map(line => line.split(' '))
        .map(line => line.map(item => parseInt(item)))
        .filter(line => {
            const indexes = [...Array(line.length).keys()];
            return indexes
                .map(index => [...line.slice(0, index), ...line.slice(index + 1)])
                .some(isGood)
        })
        .length;
}

function isGood(numbers) {
    const isAscending = numbers.every((value, index) => index === 0 || value > numbers[index - 1]);
    const isDescending = numbers.every((value, index) => index === 0 || value < numbers[index - 1]);
    const incOrDec = isAscending || isDescending;
    const inRange = numbers.every((item, index) => {
        const diff = Math.abs(item - numbers[index + 1]);
        return isNaN(diff) || (diff >= 1 && diff <= 3);
    });
    return incOrDec && inRange;
}