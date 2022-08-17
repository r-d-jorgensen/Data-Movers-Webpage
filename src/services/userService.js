import axios from "axios";
import serverEndpoint from "../utils/serverEndpoint";

// TODO: catch no response and other errors respond with empty auth if nothing
export async function logInUser(username, password) {
  const response = await axios.get(`${serverEndpoint}/user/login/${username}/${password}`)
    .then((data) => data)
    .catch((error) => console.log(error));
  return response.data;
}

// TODO: catch no response and other errors respond with empty auth if nothing
export async function createNewUser(username, password, email) {
  const response = await axios.get(`${serverEndpoint}/user/newUser/${username}/${password}/${email}`)
    .then((data) => data)
    .catch((error) => console.log(error));
  return response.data;
}
