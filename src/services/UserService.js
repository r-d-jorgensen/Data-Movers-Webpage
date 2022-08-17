import axios from "axios";
import serverEndpoint from "../utils/serverEndpoint";

export async function logInUser(username, password) {
  const response = await axios.get(`${serverEndpoint}/api/user/login/${username}/${password}`)
    .then((data) => data)
    .catch((error) => console.log(error));
  return response.data;
}
