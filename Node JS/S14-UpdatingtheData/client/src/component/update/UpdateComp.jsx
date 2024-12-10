import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const UpdateComp = () => {
  let [userData, setUserData] = useState({
    _id: 0,
    name: "",
    password: "",
    phno: "",
  });
  const formRef = useRef({});
  const { id } = useParams();
  // console.log(id);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:7986/getsingleuser/${id}`)
      .then((res) => {
        console.log(res.data.result);
        setUserData(res.data.result);
      })
      .catch((error) => {
        console.log("error while getting the data");
      });
  }, []);

  const updateUser = () => {
    axios
      .put(`http://localhost:7986/updateuser/${id}`, userData)
      .then((res) => {
        alert("User Updated");
        navigate("/home")
      })
      .catch((error) => {
        alert("Error while updating the user");
      });
  };

  const styles = {
    input: {
      width: "100%",
      padding: "10px",
      borderRadius: "10px",
      backgroundColor: "black",
      border: "none",
      color: "white",
      marginBottom: "10px",
    },
  };
  return (
    <div className="bg-[#deb887] h-[100vh] w-[100%] flex justify-center items-center">
      <div className="bg-[#ffffff] h-[400px] w-[30%] flex flex-col justify-evenly items-center rounded-[20px]">
        <h2 className="text-[#0000ff] text-[30px] ">Update</h2>
        <form>
          <input
            type="text"
            name="name"
            value={userData.name}
            style={styles.input}
            placeholder="Enter your username"
            onChange={(e) => {
              setUserData({ ...userData, name: e.target.value });
            }}
          />
          <br />
          <input
            type="password"
            name="password"
            value={userData.password}
            style={styles.input}
            placeholder="Enter the password"
            onChange={(e) => {
              setUserData({ ...userData, password: e.target.value });
            }}
          />
          <br />
          <input
            type="text"
            value={userData.phno}
            style={styles.input}
            name="phno"
            placeholder="Enter Your Phone number"
            onChange={(e) => {
              setUserData({ ...userData, phno: e.target.value });
            }}
          />{" "}
          <br />
        </form>
        <button
          onClick={updateUser}
          className="bg-[#0000ff] text-[#ffffff] px-[10px] py-[6px] rounded-lg border border-transparent hover:bg-[#ffffff] hover:text-[#0000ff] hover:border-blue-500 transition duration-300"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default UpdateComp;
