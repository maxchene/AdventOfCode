export function p1(lines) {
  let ans = 0;
  const thresholds = {
    red: 12,
    green: 13,
    blue: 14
  };
  lines.forEach((line) => {
    const [gameId, game] = line.split(": ");
    const id = parseInt(gameId.split(" ").at(1));
    const gameSets = game.split('; ');

    const gameIsPossible = gameSets
      .map(gameSet => {
        return gameSet.split(', ').map(set => {
          const [count, color] = set.split(' ');
          return thresholds[color] >= parseInt(count);
        });
      })
      .flat()
      .every(item => item === true);
    if (gameIsPossible) {
      ans += id;
    }

  });
  return ans;
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
