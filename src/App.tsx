import React, { useState } from "react";
import "./App.css";
import {
  addPost,
  deletePost,
  Post,
  PostWithoutId,
  usePosts,
} from "./hooks/posts-repo";
import { useForm, SubmitHandler } from "react-hook-form";
import CreatePostForm from "./components/CreatePostForm";
import UpdatePostForm from "./components/UpdatePostForm";

function App() {
  const {
    register,
    handleSubmit: submitNewPost,
    formState: { errors },
  } = useForm<Post>();

  const onSubmit: SubmitHandler<PostWithoutId> = (data) => addPost(data);

  const posts = usePosts();

  if (posts.error) {
    return <div>Fetch Posts Error</div>;
  }

  return (
    <div>
      <header>
        <h1>Posts</h1>
      </header>
      <section style={{ display: "flex" }}>
        <div style={{ width: "50%" }}>
          <h1>Add post</h1>
          <CreatePostForm />

          <h1>Update post</h1>
          <UpdatePostForm />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
            paddingLeft: "1rem",
          }}
        >
          <h1>Posts List</h1>
          {posts.data ? (
            posts.data.map((post) => {
              return (
                <div key={post.id}>
                  <h3>{post.title}</h3>
                  <div>{post.body}</div>
                  <button onClick={() => deletePost(post.id)}>Delete</button>
                </div>
              );
            })
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </section>
    </div>
  );
}

export default App;
