import React from "react";
import PostItem from "./Postitem";

const PostList = ({ posts, title}) => {
  return (
    <div>
      <h2 style={{textAlign: "center"}}>{title}</h2>
      {
        posts.map((post, indx) => <PostItem post={post} />) 
      }
    </div>
  )
}

export default PostList;