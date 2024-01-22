const { usernameGame, QuestionGame } = require("./datas");

const addGame = async () => {
  const username = await Validation("Buat Username yang kamu inginkan : ");
  const favorit_hero = await Validation("Tuliskan Hero Favortimu : ");
  const habbits = await Validation("Apa kebiasaan sehari-harimu : ");
  const jumlah_skin = await Validation("berapa jumlah skinmu : ");
  const jumlah_hero = await Validation("berapa jumlah heromu : ");
  const rank = await Validation("rank kamu apa : ");

  usernameGame(username, favorit_hero, habbits, jumlah_skin, jumlah_hero, rank);
};
const Validation = async (anything) => {
  let data;
  do {
    data = await QuestionGame(anything);
    if (!data) {
      console.log("Tolong di isi");
    }
  } while (!data);
  return data;
};

addGame();
