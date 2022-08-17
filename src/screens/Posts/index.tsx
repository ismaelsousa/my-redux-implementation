import React from "react";
import useDispatch from "../../Hooks/useDispatch";
import useSelector from "../../Hooks/useSelector";
import { PostsState } from "../../store/modules/posts";
import { addPost } from "../../store/modules/posts/actions";

const Posts: React.FC = () => {
  const dispatch = useDispatch();
  const state: PostsState = useSelector((state) => state.posts);

  console.log("Render: Posts");
  const handleAddPost = () => {
    dispatch(
      addPost({
        description: `New Post ${state.list.length + 1}`,
        url: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      })
    );
  };

  return (
    <div>
      <h1>Posts: {state.list.length}</h1>
      <button onClick={handleAddPost}>Add post</button>
    </div>
  );
};

export default Posts;
