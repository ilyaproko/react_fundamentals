import React from "react";

const PostItem = (props) => {
  console.log(props);
  return (
    <div className="post">
        <div className="post_counter">
          <strong>{props.post.id} {props.post.title}</strong>
          <div>
            {props.post.body}
          </div>
        </div>
        <div className="post_btns">

          <button>Delete post</button>

        </div>
    </div>
  )
}

export default PostItem;