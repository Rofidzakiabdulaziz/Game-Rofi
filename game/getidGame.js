const { getIdGame, QuestionGame } = require("./datas");

const getTodoId = async () => {
  const gameId = await QuestionGame("Masukan ID game : ");
  getIdGame(gameId);
};

getTodoId();
