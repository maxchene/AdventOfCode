import {wordsToNumbers} from 'words-to-numbers';

export function p1(lines){
   const cool =  lines
   .map(line => line.split('   '))
   .map(line => [parseInt(line.at(0)), parseInt(line.at(1))])
   .reduce((acc, current) => {
        acc.left = [...acc.left, current.at(0)].sort();
        acc.right = [...acc.right, current.at(1)].sort();
        return acc;
   },{left:[], right:[]});
   return cool.left.reduce((acc, current, index) =>{
    return acc + Math.abs(current - cool.right.at(index));
   },0);
}

export function p2(lines){
    const cool =  lines
    .map(line => line.split('   '))
    .map(line => [parseInt(line.at(0)), parseInt(line.at(1))])
    .reduce((acc, current) => {
         acc.left = [...acc.left, current.at(0)].sort();
         acc.right = [...acc.right, current.at(1)].sort();
         return acc;
    },{left:[], right:[]});
    return cool.left.reduce((acc, current, index) =>{
        const found = cool.right.filter(x => x===current).length;
        return acc+ (current*found);
    },0);
}