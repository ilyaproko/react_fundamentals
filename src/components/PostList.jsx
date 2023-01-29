import React from "react";
import PostItem from "./Postitem";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const PostList = ({ posts, title, remove }) => {

  if (!posts.length) {
    return (
      <h1 style={{ textAlign: "center" }}>
        Посты не найдены
      </h1>
    )
  }

  return (
    <div>

      <h2 style={{textAlign: "center"}}>{title}</h2>

      <TransitionGroup>
        {
          posts.map((post, indx) =>
            <CSSTransition
              key={post.id}
              timeout={{
                enter: 100,
                exit: 500,
              }}
              className="post"
            >
              <PostItem remove={remove} number={indx + 1} post={post} />
            </CSSTransition>
          ) 
        }
      </TransitionGroup>
      
    </div>
  )
}

export default PostList;