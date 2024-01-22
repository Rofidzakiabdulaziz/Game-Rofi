

const getIdGame = (length) => {
  let  id = "";
  const character = "0123456789";
  for(let i = 0; i < length ; i++){
    id += character.charAt(Math.floor(Math.random() * character.length))
  }
  return id;

}

module.exports = getIdGame;

