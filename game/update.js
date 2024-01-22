const { updateuserNamebyId, QuestionGame, rl } = require("./datas");
const update = async () => {
  const id = await Validation("Masukkan id : ");

  const username = await QuestionGame(
    "Buat Username yang kamu inginkan (Tekan enter untuk melewatkan) : "
  );
  const favorit_hero = await QuestionGame(
    "Tuliskan Hero Favortimu (Tekan enter untuk melewatkan) : "
  );
  const habbits = await QuestionGame(
    "Apa kebiasaan sehari-harimu (Tekan enter untuk melewatkan) : "
  );
  const status = await QuestionGame(
    "setatusmu apa  (Tekan enter untuk melewatkan) : "
  );
  const jumlah_skin = await QuestionGame(
    "berapa jumlah skinmu (Tekan enter untuk melewatkan) : "
  );
  const jumlah_hero = await QuestionGame(
    "berapa jumlah heromu (Tekan enter untuk melewatkan) : "
  );
  const rank = await QuestionGame(
    "rank kamu apa (Tekan enter untuk melewatkan) : "
  );

  const updateObject = {};
  if (username) updateObject.username = username;
  if (favorit_hero) updateObject.favorit_hero = favorit_hero;
  if (habbits) updateObject.habbits = habbits;
  if (status) updateObject.status = status;
  if (jumlah_skin) updateObject.jumlah_skin = jumlah_skin;
  if (jumlah_hero) updateObject.jumlah_hero = jumlah_hero;
  if (rank) updateObject.rank = rank;

  // Update the user data in the database with the provided fields
  updateuserNamebyId(id, updateObject);
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

update();
