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
        .toArray()
        .reduce((acc, current) => {
            if (current.at(3) === "don't()") {
                on = false;
            } else if (current.at(4) === 'do()') {
                on = true;
            } else if (on) {
                return acc + (parseInt(current.at(1) ?? 0) * parseInt(current.at(2) ?? 0));
            }
            return acc;
        }, 0);

}