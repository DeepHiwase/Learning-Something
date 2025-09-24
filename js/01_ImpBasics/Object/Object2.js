// Q. Cricket Team
const team = {
  name: "Indian Cricket Team",
  players: [{ id: 1, scores: [10, 34, 80] }],

  // Functions
  addScore: function (id, score) {
    const playerExists = this.players.find((player) => player.id === id);

    if (playerExists) {
      playerExists.scores.push(score);
    } else {
      this.players.push({
        id,
        scores: [score],
      });
    }
  },

  addPlayer: function (id) {
    const playerExists = this.players.find((player) => player.id === id);

    if (playerExists) {
      console.log(`Player already exists with id ${id}`);
    } else {
      this.players.push({
        id,
        scores: [],
      });
    }
  },

  averageScore: function (id) {
    const playerExists = this.players.find((player) => player.id === id);

    if (!playerExists) {
      console.log(`Player with given id ${id} does not exists`);
    } else {
      const avgScore =
        playerExists.scores.reduce((sum, init) => sum + init, 0) /
        playerExists.scores.length;
      console.log("Average score of player with id", id, "is:", avgScore);
    }
  },

  teamAverage: function () {
    let sumOfAllScoresByTeam = 0;
    let countOfScore = 0;
    for (let i = 0; i < this.players.length; i++) {
      sumOfAllScoresByTeam += this.players[i].scores.reduce(
        (sum, init) => sum + init,
        0
      );
      countOfScore += this.players[i].scores.length;
    }

    const teamAverageScore = sumOfAllScoresByTeam / countOfScore;

    console.log("Team avg score:", teamAverageScore)
  },
};


team.addPlayer(2);
team.addPlayer(3);

team.addScore(1, 29);
team.addScore(3, 80);
team.addScore(2, 40);
team.addScore(2, 100);
team.addScore(2, 120);
team.addScore(3, 20);
console.log(team.players)

team.averageScore(1)
team.averageScore(2)
team.teamAverage()