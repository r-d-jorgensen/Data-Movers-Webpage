import axios from "axios";
import { BehaviorSubject } from 'rxjs';
import serverEndpoint from "../utils/serverEndpoint";

// TODO: check in on bug where refreshing causes user to be logged out
const userSubject = new BehaviorSubject({
  isAuthed: false,
  token: null,
  error: null,
  user_id: null,
  user_type_ENUM_id: null
});

async function createNewUser(username, password, email) {
  const authResponse = await axios.get(`${serverEndpoint}/user/newUser/${username}/${password}/${email}`)
    .then((data) => data.data)
    .catch((error) => console.log(error));

    if (!authResponse) return {isAuthed: false, error: "server did not respond"};
    if (authResponse.error !== null) return {isAuthed: false, error: authResponse.error};

    userSubject.next(authResponse);
    return {isAuthed: true, error: null};
}

async function logInUser(username, password) {
  const authResponse = await new Promise((resolve, reject) => {
    axios.get(`${serverEndpoint}/user/login/${username}/${password}`)
      .then((data) => resolve(data.data))
      .catch((error) => reject(error));
  });

  if (!authResponse) return {isAuthed: false, error: "server did not respond"};
  if (authResponse.error !== null) return {isAuthed: false, error: authResponse.error};

  userSubject.next(authResponse);
  return {isAuthed: true, error: null};
}

function logoutUser() {
  userSubject.next({
    isAuthed: false,
    token: null,
    error: null,
    user_id: null,
    user_type_ENUM_id: null
  });
}

const userService = {
  createNewUser,
  logInUser,
  logoutUser,
  account: userSubject.asObservable(),
  get userData() { return userSubject.value; },
};

export default userService;