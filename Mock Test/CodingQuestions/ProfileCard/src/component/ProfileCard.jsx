import React from "react";
import "./ProfileCard.css"
const ProfileCard = ({ image, name }) => {
  return (
    <div className="ImageContainer">
      <div className="leftPanel">
        <img src={image} alt="Profile" className="w-[100%] max-h-[100%]" />
      </div>

      <div className="w-[70%] pl-4">
        <h1 className="text-2xl font-bold">{name}</h1>
        <h5 className="text-lg text-gray-700">Full Stack Developer</h5>
        <table className="mt-4  w-full text-center">
          <thead>
            <tr>
              <th>Articles</th>
              <th>Followers</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr>
              <td>41</td>
              <td>896</td>
              <td>8</td>
            </tr>
          </tbody>
        </table>
        <div>
            <button id="chatButton">Chat</button>
            <button id="followButton">Follow</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
