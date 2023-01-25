import React from "react";
import PostItem from "./Postitem";

const PostList = ({ posts, title, remove }) => {
  return (
    <div>
      <h2 style={{textAlign: "center"}}>{title}</h2>
      {
        posts.map((post, indx) => <PostItem remove={remove} number={indx + 1} post={post} />) 
      }
    </div>
  )
}

export default PostList;