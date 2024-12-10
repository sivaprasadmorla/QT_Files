import { useRef } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const formRef = useRef({});
  const navigate = useNavigate();
  const handleChange = (e) => {
    // console.log(e);
    const { name, value } = e.target;

    formRef.current[name] = value;
    // console.log(formRef.current);
  };

  const handleSubmit = () => {
    // console.log(formRef.current)
    axios
      .post("http://localhost:7986/newUser", formRef.current)
      .then((res) => {
        alert("Registered Successfully!!!")
        navigate("/login")
      })
      .catch((error) => {
        alert("Error while creating user");
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
        <h2 className="text-[#0000ff] text-[30px] ">Sign Up</h2>
        <form>
          <input
            type="text"
            name="name"
            style={styles.input}
            placeholder="Enter your username"
            onChange={handleChange}
          />
          <br />
          <input
            type="password"
            name="password"
            style={styles.input}
            placeholder="Enter the password"
            onChange={handleChange}
          />
          <br />
          <input
            type="text"
            style={styles.input}
            name="phno"
            placeholder="Enter Your Phone number"
            onChange={handleChange}
          />{" "}
          <br />
        
        </form>
        <button
          className="bg-[#0000ff] text-[#ffffff] px-[10px] py-[6px] rounded-lg border border-transparent hover:bg-[#ffffff] hover:text-[#0000ff] hover:border-blue-500 transition duration-300"
          onClick={handleSubmit}
        >
          Register
        </button>
        <Link to="/" className="text-[#0000ff]">
          Back to Login
        </Link>
      </div>
    </div>
  );
};

export default Signup;
