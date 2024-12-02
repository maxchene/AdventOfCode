import fs from 'fs';
import {program} from 'commander';


const currentYear = new Date().getFullYear();
const currentDay = new Date().getDate();

program
    .name('Advent of Code')
    .description('Commandline usage for javascript Advent of Code')
    .option('-y, --year <int>', 'play a specific year', currentYear)
    .option('-d, --day <int>', 'play a specific day', currentDay);

program.parse();

const options = program.opts();

const year = options.year;
const day = options.day.toString().padStart(2, '0');

let module;
try {
    const module = await import(`./src/${currentYear}/day${day}.js`);

    const lines = fs.readFileSync(`./inputs/${year}/day${day}.txt`, {
        encoding: 'utf-8'
    }).split(/\r?\n/);

    console.table({
        day,
        p1: module.p1(lines),
        p2: module.p2(lines)
    });

} catch (e) {
    throw new Error(`Module for day ${day} not found`);
}

