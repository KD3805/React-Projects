import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

var stuData = [
    ["https://cdn.wallpapersafari.com/83/72/DU7VOk.png", "Kishan", 205, "B.Tech CSE", 3, "Sept - 2022"],

    ["https://w0.peakpx.com/wallpaper/28/814/HD-wallpaper-sasuke-uchiha-naruto-sasuke-uchiha.jpg", "Parth", 203, "B.Tech CSE", 3, "Sept - 2022"],

    ["https://cdn.wallpapersafari.com/83/72/DU7VOk.png", "Jenish", 206, "B.Tech CSE", 3, "Sept - 2022"],

    ["https://w0.peakpx.com/wallpaper/28/814/HD-wallpaper-sasuke-uchiha-naruto-sasuke-uchiha.jpg", "Viral", 219, "B.Tech CSE", 3, "Sept - 2022"],

    ["https://cdn.wallpapersafari.com/83/72/DU7VOk.png", "Mayur", 212, "B.Tech CSE", 3, "Sept - 2022"],

    ["https://w0.peakpx.com/wallpaper/28/814/HD-wallpaper-sasuke-uchiha-naruto-sasuke-uchiha.jpg", "Deep", 209, "B.Tech CSE", 3, "Sept - 2022"],

    ["https://cdn.wallpapersafari.com/83/72/DU7VOk.png", "Devang", 213, "B.Tech CSE", 3, "Sept - 2022"],

    ["https://w0.peakpx.com/wallpaper/28/814/HD-wallpaper-sasuke-uchiha-naruto-sasuke-uchiha.jpg", "Aayush", 204, "B.Tech CSE", 3, "Sept - 2022"],

    ["https://cdn.wallpapersafari.com/83/72/DU7VOk.png", "Darshan", 202, "B.Tech CSE", 3, "Sept - 2022"],

    ["https://w0.peakpx.com/wallpaper/28/814/HD-wallpaper-sasuke-uchiha-naruto-sasuke-uchiha.jpg", "Bhavesh", 215, "B.Tech CSE", 3, "Sept - 2022"],

    ["https://cdn.wallpapersafari.com/83/72/DU7VOk.png", "Kishan", 205, "B.Tech CSE", 3, "Sept - 2022"],

    ["https://w0.peakpx.com/wallpaper/28/814/HD-wallpaper-sasuke-uchiha-naruto-sasuke-uchiha.jpg", "Parth", 203, "B.Tech CSE", 3, "Sept - 2022"],

    

];


function CardBody(stu) {
  const navigate = useNavigate();

  return (
      <div className="faculty-items col-3 card">
        <img src={stu.avatar} className="card-img-top img-width" alt="..." />

      <div className="card-body">
          <h3 className="card-title">{stu.name}</h3>
          <h6 className="card-subtitle mb-2 text-danger">{stu.rollNo}</h6>

          <span className="card-text">{stu.jobTitle}</span>

            <div className="text-secondary profile"
            style={{marginTop: "30px", marginBottom: "10px"}}
            onClick={()=>{
              navigate("/detail/"+stu.id)
            }}
            ><span>View Profile&rarr;</span></div>
        </div>
      </div>
  );
}

function StuCard() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch("https://64a2d09cb45881cc0ae5be53.mockapi.io/articles")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setPost(res);
      });
  }, []);

  return (
    <>
      <div className="faculty-section">
        <div className="container">
          <div className="row Cbody">
            {post.map((data) => {
              return (
                <CardBody
                  id={data.id}
                  avatar={data.avatar}
                  name={data.name}
                  rollNo={data.rollNo}
                  detail={data.detail}
                  jobTitle={data.jobTitle}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export {StuCard, CardBody};