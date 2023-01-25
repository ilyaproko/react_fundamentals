import React from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import { useState } from "react";

const PostForm = (props) => {

  const [post, setPost] = useState({
    title: "",
    body: "",
  });

  const addNewPost = (e) => {
    e.preventDefault();

    const newPost = { ...post, id: Date.now() };

    props.create(newPost);

    setPost( { title: "", body: "" } );
  }

  return (
    <div>

      <form action="">
        
        <MyInput
          value={post.title}
          onChange={e => setPost( { ...post, title: e.target.value } )}
          type="text" placeholder="post's name"/>
        
        <MyInput
          value={post.body}
          onChange={e => setPost( { ...post, body: e.target.value } )}
          type="text" placeholder="post's description"/>

        <MyButton onClick={addNewPost}>Create post</MyButton>
      </form>

    </div>
  )
}

export default PostForm;