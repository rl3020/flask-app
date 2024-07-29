const HOST_URL = "http://127.0.0.1:5000/";

// data in format:
// https://ipinfo.io/developers/ip-to-geolocation-database
const getUserData = () => {
  fetch("http://ipinfo.io/json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => console.error("Error (did not get IP): ", error));
};

// Returns
// 1. Country name
// 2. Flag name
const getUserFlag = (userData) => {
  fetch(HOST_URL)
    .then((response) => response.json())
    .then((data) => {
      console.log("img url: ", data);
      return data;
    })
    .catch((error) => console.error("Error (did not get flag url): ", error));
};

const onLoad = () => {
  const userData = getUserData();
  const userFlag = getUserFlag(userData);
};

onLoad();
