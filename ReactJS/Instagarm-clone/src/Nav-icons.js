import React from "react";

const Navicons = (props) => {
  return (
    <div className={`iconbar text-${props.mode==='light'?'dark':'light'}`}>
      <div className="icons insta-icon">
        <i
          class="fa-brands fa-instagram "
        ></i>
      </div>
      <div className="icons">
        <i class="fa-solid fa-house"></i>
      </div>
      <div className="icons">
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <div className="icons">
        <i class="fa-regular fa-compass"></i>
      </div>
      <div className="icons">
        <i class="fa-brands fa-youtube"></i>
      </div>
      <div className="icons">
        <i class="fa-brands fa-facebook-messenger"></i>
      </div>
      <div className="icons">
        <i class="fa-regular fa-heart"></i>
      </div>
      <div className="icons">
        <i class="fa-regular fa-square-plus"></i>
      </div>
      <div class="profile-pic">
        <img src="myImg.jpg" />
      </div>
      <div className="icons">
        <i class="fa-solid fa-bars"></i>
      </div>
    </div>
  );
};

export default Navicons;
