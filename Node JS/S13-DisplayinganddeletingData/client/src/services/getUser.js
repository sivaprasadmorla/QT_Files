import axios from "axios";
const getUser = (setUser) => {
  axios
    .get("http://localhost:7986/getuser")
    .then((res) => {
      console.log(res.data);
      setUser(res.data);
      
    })
    .catch((error) => {
      console.log("Error while Fetching the data");
    });
};

export default getUser;
