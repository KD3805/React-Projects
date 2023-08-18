import React from "react";
import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

const InstaHead = (props)=>{
  return(
    <>
      <div className="insta-logo">
        <a href="/"><img src="Instagram_Logo.png" className="logo" alt="" /></a>
        <i className="fa-solid fa-moon mode" id="mode" onClick={props.toggleMode}></i>
      </div>
    </>
  );
}

const Story = (props) => {
  return (
    <>
      <div className={`story text-${props.mode==='light'?'dark':'light'}`}>
        <img src={props.avatar} alt="" className="story-img" />
        <div className="story-username">
          <p>{props.name}</p>
        </div>
      </div>
    </>
  );
};

const Main = (props) => {
  let date = new Date(props.time);
  let today = new Date();
  let y1 = date.getFullYear();
  let y2 = today.getFullYear();
  let y3 = y2 - y1;

  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState(0);
  const [shares, setShares] = useState(0);

  return (
    <>
      <div className={`content text-${props.mode==='light'?'dark':'light'}`}>
        <div className="post">
          <div className="user-profile">
            <div className="header">
              <img src={props.avatar} alt="" className="profile-img" />
              <div className="post-heading">
                <div className="post-name-time">
                  <p className="username">{props.username}</p>
                  <div className="dot">
                    <i className="fa-solid fa-circle"></i>
                  </div>
                  <p className="time">{y3} years</p>
                </div>
                <p className="audio">{props.audio}</p>
              </div>
            </div>

            <div className="options">
              <p className="op">. . .</p>
            </div>
          </div>

          <img src={props.post} alt="" className="post-img" />

          <div className="post-icons">
            <div className="like-com-share">
              <i className="fa-regular fa-heart" id="like" onClick={()=>{
                document.getElementById('like').className= 'fa-regular fa-heart'? 'fa-solid fa-heart': 'fa-solid fa-heart';
                document.getElementById('like').style.color = "red";
                setLikes((pri)=>{return pri+1;});
              }}></i>
              <i className="fa-regular fa-comment" onClick={()=>{
                setComments((pri)=>{return pri+1;});
              }}></i>
              <i className="fa-regular fa-paper-plane" onClick={()=>{
                setShares((pri)=>{return pri+1;});
              }}></i>
            </div>
            <div className="save">
              <i className="fa-regular fa-bookmark" id="save" onClick={()=>{
                document.getElementById('save').className= "fa-regular fa-bookmark" ? "fa-solid fa-bookmark" : "fa-regular fa-bookmark";
              }}></i>
            </div>
          </div>

          <div className="post-counter">
            <p>{likes} like {comments} comment {shares} share</p>
          </div>

          <p className="discription"><span style={{fontWeight: "500"}}>{props.username}</span>&nbsp;&nbsp;{props.discription}</p>
        </div>
      </div>
    </>
  );
};

const Feeds = (props) => {

  return (
    <div className="feeds" >
      <InstaHead mode={props.mode} toggleMode={props.toggleMode}/>
      <div className="story-container">
      <StoryContainer mode={props.mode} toggleMode={props.toggleMode}/>
      </div>
      <Post mode={props.mode} toggleMode={props.toggleMode}/>
    </div>
  );
};

const StoryContainer = () => {
  const [story, setStory] = useState([]);

  useEffect(()=>{
    fetch("https://64a2d09cb45881cc0ae5be53.mockapi.io/Post")
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log(res);
      setStory(res);
    });
  },[]);
    

  return story.map((data) => {
    return (
      <>
        <Story avatar={data.avatar} name={data.username} />
      </>
    );
  });
};

const Post = () => {
  const [post, setPost] = useState([]);

    useEffect(()=>{
    fetch("https://64a2d09cb45881cc0ae5be53.mockapi.io/Post")
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log(res);
      setPost(res);
    });
  },[]);
  // console.log(post[0].username);
  return post.map((data) => {
    return (
      <>
        <Main
          avatar={data.avatar}
          username={data.username}
          discription={data.discription}
          post={data.post}
          time={data.time}
          audio={data.audio}
        />
        {/* </div> */}
      </>
    );
  });
};

export { InstaHead, StoryContainer, Post, Feeds };
