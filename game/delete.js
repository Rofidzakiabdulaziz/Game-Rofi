const { deleteUsernameByid, QuestionGame } = require("./datas");

const deleteUsername = async () => {
  const id = await Validation("masukkan id anda : ");
  deleteUsernameByid(id);
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
deleteUsername();
