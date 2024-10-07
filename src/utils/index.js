import axios from "axios";
const fetchApiData = async (path) => {
  /*
    This function fetches data from the rick and morty api
    It takes in a path and appends it to the base url
    The path can either be character, location, episode     
*/

  try {
    const response = await axios(`https://rickandmortyapi.com/api/${path}`);
    return response.data;
  } catch (error) {
    console.log("unable to fetch data");
  }
};
