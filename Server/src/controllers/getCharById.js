const axios = require('axios');

const URL = "http://rickandmortyapi.com/api/character/"

const getCharById = async (res, ID) => {
  try {
    const response = await axios(`${URL}${ID}`);

    const { id, name, gender, species, origin, image, status } = response.data;

    const character = {
      id,
      name,
      gender,
      species,
      origin,
      image,
      status,
    };

    res.writeHeader(200, { "Content-type": "application/json" });
    return res.end(JSON.stringify(character))
  } catch (error){
    res.writeHeader(500, { "Content-type": "text/plain" });
    return res.end(error.message)
  }
  }
  module.exports = getCharById;

// const getCharById =(res, ID)=>{
//   axios.get(`${URL}${ID}`)
//     .then(({data}) =>{
//       const {id, name, status, species, origin, gender,image} = data;
//         const character = {
//           id,
//           name, 
//           gender, 
//           species, 
//           origin, 
//           image, 
//           status
//         };
//         console.log(character)
//         res.writeHead(200, {'Content-Type': 'application/json'});
//        return res.write(JSON.stringify(character));
//       })
//       .catch((err)=>{
//         res.writeHead(500, { 'Content-Type': 'text/plain' });
//         return res.end(err.message);
//       })
// };

 // module.exports = getCharById
