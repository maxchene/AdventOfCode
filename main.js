import fs from 'fs';

const currentYear = new Date().getFullYear();

const files = fs.readdirSync(`inputs/${currentYear}`);
const inputName = files.at(-1);
const moduleName = inputName.replace('.txt','.js');
const module = await import(`./src/${currentYear}/${moduleName}`);
const lines  = fs.readFileSync(`./inputs/${currentYear}/${inputName}`).toString().split("\r\n");
console.table({
    day: inputName.replace('.txt',''),
    p1: module.p1(lines),
    p2: module.p2(lines)
})