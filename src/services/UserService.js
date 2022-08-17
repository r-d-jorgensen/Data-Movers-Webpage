import axios from "axios";
import serverEndpoint from "../utils/serverEndpoint";

export function logInUser(username, password) {
  const response = axios.get(`${serverEndpoint}/api/user/login/${username}/${password}`)
    .then((data) => data)
    .catch((error) => console.log(error));
  return response.data;
}
