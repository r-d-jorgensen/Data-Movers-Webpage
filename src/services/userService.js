import axios from "axios";
import { BehaviorSubject } from 'rxjs';
import serverEndpoint from "../utils/serverEndpoint";

const userSubject = new BehaviorSubject({
  isAuthed: false,
  token: "",
  error: "",
  user_id: -1,
  user_type_ENUM_id: -1
});

// TODO: catch no response and other errors respond with empty auth if nothing
export async function createNewUser(username, password, email) {
  const response = await axios.get(`${serverEndpoint}/user/newUser/${username}/${password}/${email}`)
    .then((data) => data)
    .catch((error) => console.log(error));
  return response.data;
}

// TODO: check in on bug where refreshing causes user to be logged out
// TODO: catch no response and other errors respond with empty auth if nothing
async function logInUser(username, password) {
  const authResponse = await new Promise((resolve, reject) => {
    axios.get(`${serverEndpoint}/user/login/${username}/${password}`)
      .then((data) => resolve(data.data))
      .catch((error) => reject(error));
  });
  
  if (!authResponse) return {error: "server did not respond"};
  userSubject.next(authResponse);
}

function logoutUser() {
  userSubject.next(null);
}

const userService = {
  createNewUser,
  logInUser,
  logoutUser,
  account: userSubject.asObservable(),
  get userData() { return userSubject.value; },
};

export default userService;