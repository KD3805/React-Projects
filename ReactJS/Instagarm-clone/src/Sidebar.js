import React from "react";
// import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Sidebar = (props) => {
  const [suggtionID, setsuggtionID] = useState([]);

  useEffect(() => {
    fetch("https://64a2d09cb45881cc0ae5be53.mockapi.io/Post")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        setsuggtionID(res);
      });
  }, []);

  return (
    <>
      <div className={`sidebar text-${props.mode==='light'?'dark':'light'} `}>
        <div className="user-profile">
          <div className="header">
            <img src="myImg.jpg" alt="" className="profile-img" />
            <div className="post-heading">
              <div className="post-name-time">
                <p className="username">k.dabhi_01</p>
              </div>
              <p className="name">Kishan Dabhi</p>
            </div>
          </div>

          <div className="options">
            <a href="#" className="switch" style={{ textDecoration: "none", color: "blue" }}>
              Switch
            </a>
          </div>
        </div>

        <div className="suggetions">
          <div className="suggested-lbl">
            <h3 style={{ color: "gray", fontWeight: "400" }}>
              Suggested for you
            </h3>
            <a
              href="#"
              style={{
                color: "black",
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              See all
            </a>
          </div>

          {suggtionID.map((data) => {
            return (
              <>
                <div className="user-profile">
                  <div className="header">
                    <img src={data.avatar2} alt="" className="profile-img" />
                    <div className="post-heading">
                      <div className="post-name-time">
                        <p className="username">{data.username}</p>
                      </div>
                      <p className="name">Followed by {data.username2} + more...</p>
                    </div>
                  </div>

                  <div className="options">
                    <a
                      href="#"
                      className="switch"
                      style={{ textDecoration: "none", color: "blue" }}
                    >
                      Follow
                    </a>
                  </div>
                </div>
              </>
            );
          })}
        </div>

        <div className="footer">
            <p style={{fontSize:"16px",color:"gray",margin:"40px auto"}}>© 2023 INSTAGRAM FROM KD</p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
