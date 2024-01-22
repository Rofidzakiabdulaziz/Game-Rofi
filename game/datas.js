const { rejects } = require("assert");
const getIdgame = require("./getRandomid");
const fs = require("fs");
const { resolve, parse } = require("path");
const readline = require("readline");

const rl = readline.Interface({
  input: process.stdin,
  output: process.stdout,
});

const directory = "./database";
if (!fs.existsSync(directory)) {
  fs.mkdir(directory);
}

const checkFile = "./database/datas.json";
if (!fs.existsSync(checkFile)) {
  fs.writeFileSync(checkFile);
}

const QuestionGame = (question) => {
  return new Promise((resolve, rejects) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
};

const games = () => {
  const fileGame = fs.readFileSync(checkFile, "utf-8");
  const data = JSON.parse(fileGame);
  console.log(data);

  rl.close();
};

const usernameGame = (
  username,
  favorit_hero,
  habbits,
  status,
  jumlah_skin,
  jumlah_hero,
  rank
) => {
  const id = getIdgame(10);
  const game = {
    id,
    username,
    favorit_hero,
    habbits,
    status,
    jumlah_skin,
    jumlah_hero,
    rank,
  };
  const file = fs.readFileSync(checkFile, "utf-8");

  const dataGames = JSON.parse(file);
  dataGames.push(game);
  fs.writeFileSync(checkFile, JSON.stringify(dataGames));
  console.log("Kamu Sudah terdaftar");

  rl.close();
};

const getIdGame = (id) => {
  const file = fs.readFileSync(checkFile, "utf-8");
  const data = JSON.parse(file);
  const findGameId = data.find((Game) => Game.id === id);

  if (findGameId) {
    console.log(findGameId);
  } else {
    console.log(`Game dengan ID ${findGameId} tidak ditemukan.`);
  }

  rl.close();
};

const updateuserNamebyId = (id, updateGame) => {
  const file = fs.readFileSync(checkFile, "utf-8");
  const dataGame = JSON.parse(file);
  const index = dataGame.findIndex((game) => game.id === id);

  if (index !== -1) {
    dataGame[index] = { ...dataGame[index], ...updateGame };
    fs.writeFileSync(checkFile, JSON.stringify(dataGame, null, 2));
    console.log(`Successfully update username Game: ${id}`);
  } else {
    console.log(`game dengan id ${id} tidak ditemukan`);
  }

  rl.close();
};

const deleteUsernameByid = (id) => {
  const file = fs.readFileSync(checkFile, "utf-8");
  const dataGame = JSON.parse(file);
  const filterGameId = dataGame.filter((game) => game.id !== id);

  if (filterGameId.length < dataGame.length) {
    fs.writeFileSync(checkFile, JSON.stringify(filterGameId, null, 2));
    console.log(`Successfully delete game : ${id}`);
  } else {
    console.log(`game dengan id ${id} tidak ditemukan`);
  }
  rl.close();
};

module.exports = {
  QuestionGame,
  games,
  usernameGame,
  getIdGame,
  updateuserNamebyId,
  deleteUsernameByid,
  rl,
};
