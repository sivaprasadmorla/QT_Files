import axios from "axios";
import getUser from "./getUser";
const removerUser = (id,setUser) => {
  // alert(id)
  axios
    .delete(`http://localhost:7986/removeuser/${id}`)
    .then(() => {
        // getUser()
        // setUser((prevUsers)=>{console.log(prevUsers)})
        setUser((prevUsers) => prevUsers.filter((user) => user._id !== id));
      alert("deleted Successfully ");
    })
    .catch((error) => {
      alert("error while deleting the record");
    });
};

export default removerUser;
