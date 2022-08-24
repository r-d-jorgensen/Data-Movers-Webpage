import axios from "axios";
import serverEndpoint from "../utils/serverEndpoint";

export async function createNewUser(username, password, email) {
  const authResponse = await axios.get(`${serverEndpoint}/user/newUser/${username}/${password}/${email}`)
    .then((data) => data.data)
    .catch((error) => console.log(error));

  if (!authResponse) return {isAuthed: false, error: "server did not respond"};
  if (authResponse.error !== null) return {isAuthed: false, error: authResponse.error};
  
  localStorage.setItem('user', JSON.stringify(authResponse));
  return {isAuthed: true, error: null};
}

export async function logInUser(username, password) {
  const authResponse = await new Promise((resolve, reject) => {
    axios.get(`${serverEndpoint}/user/login/${username}/${password}`)
      .then((data) => resolve(data.data))
      .catch((error) => reject(error));
  });

  if (!authResponse) return {isAuthed: false, error: "server did not respond"};
  if (authResponse.error !== null) return {isAuthed: false, error: authResponse.error};

  localStorage.setItem('user', JSON.stringify(authResponse));
  return {isAuthed: true, error: null};
}

export function logoutUser() {
  localStorage.clear();
}

export function checkAuth() {
  const userData = localStorage.getItem("user");
  if (userData) return JSON.parse(userData).isAuthed;
  return false;
}