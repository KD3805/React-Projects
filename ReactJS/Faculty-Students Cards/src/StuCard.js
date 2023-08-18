import React from "react";

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


function CardBody(fac) {
  return (
      <div class="faculty-items col-3 card">
        <img src={fac.avatar} class="card-img-top img-width" alt="..." />

      <div class="card-body">
          <h3 class="card-title">{fac.name}</h3>
          <h6 class="card-subtitle mb-2 text-danger">{fac.designation}</h6>

          <span class="card-text">{fac.education}</span>

          <a href="#" class="text-secondary profile">
            <span>View Profile&rarr;</span>
          </a>
        </div>
      </div>
  );
}

function StuCard() {
  return (
    <>
      <div class="faculty-section">
        <div class="container">
          <div class="row Cbody">
            {stuData.map((data) => {
              return (
                <CardBody
                  avatar={data[0]}
                  name={data[1]}
                  designation={data[2]}
                  education={data[3]}
                  experience={data[4]}
                  joiningyear={data[5]}
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