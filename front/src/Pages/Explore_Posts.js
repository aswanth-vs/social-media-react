import React from "react";

function Explore_Posts({ posts }) {
  return (
    <>
      {posts.map((post, index) => (
        <div key={index}>
          <h2>{post.name}</h2>
        </div>
      ))}{" "}
    </>
  );
}

export default Explore_Posts;
