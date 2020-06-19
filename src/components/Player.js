import React from "react";

const Player = ({ image_path, position, fullname, dateofbirth }) => {
  return (
    <div className="px-5 py-5 shadow mt-3 match-player-block ">
      <img className="player-img " src={image_path} alt = "player photo" />
        <div >Name : {fullname}</div>
        <div >Position : {position}</div>
        <div> Date of Birth :{dateofbirth}</div>
    </div>
  );
};

export default Player;
