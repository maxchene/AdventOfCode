export function p1(lines) {

  const thresholds = {
    red: 12,
    green: 13,
    blue: 14
  };

  return lines.reduce((acc, line) => {
    const [gameId, game] = line.split(": ");
    const id = parseInt(gameId.split(" ").at(1));
    const gameIsPossible = game.replace(/;/g,',')
    .split(', ')
    .map(countColor => {
      const [count, color] = countColor.split(' ');
      return thresholds[color] >= parseInt(count);
    })
    .every(item => item ===true);
    
    return acc+= gameIsPossible ? id:0;
  },0);
}

export function p2(lines) {

  return lines
    .reduce((lineAcc, line) => {
      const game = line.split(": ").at(1);
      const lineMaxColors = game.replace(/,|;/g, ',')
        .split(', ')
        .reduce((gameAcc, currentGame) => {
          let [count, color] = currentGame.split(' ');
          count = parseInt(count);
          gameAcc[color] = count > gameAcc[color] ? count : gameAcc[color];
          return gameAcc;
        }, { red: 1, blue: 1, green: 1 });

        const gamePower = Object.values(lineMaxColors).reduce((a,b) => a*b);

      return lineAcc += gamePower;
    }, 0);
}
