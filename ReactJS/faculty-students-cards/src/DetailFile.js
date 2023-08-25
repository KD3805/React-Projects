import { useNavigate, useParams } from "react-router-dom";
import { React, useState, useEffect } from "react";

const DetailFile = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://64a2d09cb45881cc0ae5be53.mockapi.io/articles/" + id)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        // console.log(res);
        setPost(res);
      });
  }, []);
  return (
    <>
      <div className="comment-box" id="cbox">
        <div className="p-img">
          <img src={post.avatar} alt="" className="post-img" />
        </div>

        <div className="comment-section">
          <div className="post-user">
            <div className="post-header" style={{ gap: "20px" }}>
              <img src={post.avatar} alt="" className="profile-img" />
              <div className="post-heading">
                <div className="post-name-time">
                  <p className="username">{post.name}</p>
                </div>
                <p className="audio">{post.rollNo}</p>
              </div>
            </div>

            <div className="options">
              <button
                className="btn btn-dark"
                onClick={() => {
                  navigate("/student");
                }}
              >
                Back
              </button>
            </div>
          </div>

          <div className="viewer-comments">
            <div className="user-description">
              <img src={post.avatar} alt="" className="profile-img" />
              <p className="discription">
                <div style={{ fontWeight: "500" }}>
                  {post.name} ( {post.jobTitle} )
                </div>
                {post.detail}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailFile;
