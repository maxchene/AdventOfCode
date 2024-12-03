export function p1(lines) {
    return lines
        .join()
        .matchAll(/mul\((\d+),(\d+)\)/g)
        .toArray()
        .map(item => parseInt(item.at(1)) * parseInt(item.at(2)))
        .reduce((acc, current) => {
            return acc + current;
        }, 0);
}

export function p2(lines) {
    let on = true;
    return lines
        .join()
        .matchAll(/mul\((\d+),(\d+)\)|(don't\(\))|(do\(\))/gm)
        .reduce((acc, current) => {
            const [, a, b, dont, doIt] = current;
            if (dont === "don't()") {
                on = false;
            } else if (doIt === "do()") {
                on = true;
            } else if (on) {
                acc += (parseInt(a) || 0) * (parseInt(b) || 0);
            }
            return acc;
        }, 0);
}