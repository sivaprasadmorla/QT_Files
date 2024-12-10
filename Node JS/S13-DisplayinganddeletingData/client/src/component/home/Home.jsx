import React, { useEffect, useState } from "react";
import axios from "axios";
import getUser from "../../services/getUser";
import {useNavigate} from'react-router-dom'
import removerUser from "../../services/removeUser";
import "./Home.css";

const Home = () => {
  const [user, setUser] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    getUser(setUser);
  }, []);

  const handleLogout = ()=>{
    navigate("/")
  }

  return (
    <div className="w-[100%] min-h-[100vh] bg-[#000000] text-[#ffffff] flex flex-col  items-center">
      <h1 className="mt-[10px] text-[30px]">Home Page</h1>
      <button className="bg-[#ff0000] m-[20px] px-[12px] rounded-md hover:bg-[#000000] border border-transparent hover:border-[#ff0000]" onClick={handleLogout}>
        Logout
      </button>
      <p className="text-justify m-[30px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At maxime saepe
        velit commodi. Fuga maxime ut eum consequuntur a dicta illo ratione
        laudantium non quia itaque, et dolor harum explicabo odit beatae
        eligendi impedit in, placeat veritatis exercitationem corporis
        voluptate? Deleniti maiores ullam nisi. Odit quas, culpa soluta unde
        dolorum qui laudantium dolores deserunt consequuntur, placeat nihil
        incidunt, ducimus nulla illum eaque cumque praesentium sequi fugiat a ab
        sit labore voluptates molestiae corporis? Eaque excepturi, amet
        laudantium et doloribus praesentium natus odit quas eum fugiat quis cum
        veniam sunt delectus rerum omnis deleniti eos ipsum velit commodi, quae
        perspiciatis! Eveniet vero aut aliquam ab molestias, et, delectus a quos
        tenetur in suscipit culpa. Architecto consequuntur vitae ab dolorum
        labore soluta nobis iure quidem accusantium laboriosam ipsum, incidunt
        quibusdam inventore assumenda itaque provident voluptate voluptatum aut.
        Accusamus rerum, at cum inventore nisi culpa ullam illo autem
        voluptatibus neque. Dicta sunt eveniet vitae repellendus consequuntur,
        inventore facilis magni impedit suscipit ratione? Ratione facere vero
        dolorem repellendus amet odit perferendis ad velit doloribus, sit
        dignissimos ab optio quidem sequi accusamus quis, nisi totam libero?
        Esse iusto, dolorem architecto repellendus cum iure voluptate laudantium
        sunt soluta neque mollitia, aliquid, aut enim ipsa excepturi ad.
      </p>
      <div className="w-[90%]">
        {user.length > 0 ? (
          <table className="w-[100%] h-auto">
            <thead>
            <tr>
              <th>Name</th>
              <th>Password</th>
              <th>Phone</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
            </thead>
            <tbody>
            {user.map((element, index) => {
              return (
                <tr key={index + 1}>
                  <td>{element.name}</td>
                  <td>{element.password}</td>
                  <td>{element.phno}</td>
                  <td>
                    <button className="border border-transparent border-[#5e8000] px-[12px] py-[3px] rounded-md transition duration-[1s] hover:bg-[#5e8000]">
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      className="border border-transparent border-[#ff0000] px-[12px] py-[3px] rounded-md transition duration-[1s] hover:bg-[#ff0000]"
                      onClick={() => {
                        removerUser(element._id, setUser);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
            </tbody>
          </table>
        ) : (
          <div>
            <div>
              <h1 className="text-[#ff0000] text-[25px] text-center">
                No User Deatils
              </h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
