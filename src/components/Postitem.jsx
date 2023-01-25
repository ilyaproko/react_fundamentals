import React from "react";
import classes from "./UI/button/MyButton.module.css";

const PostItem = (props) => {
  return (
    <div className="post">
        <div className="post_counter">
          <strong>{props.number} {props.post.title}</strong>
          <div>
            {props.post.body}
          </div>
        </div>
        <div className="post_btns">

          <button className={classes.myBtn} onClick={() => props.remove(props.post)}>Delete post</button>

        </div>
    </div>
  )
}

export default PostItem;