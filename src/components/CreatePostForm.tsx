import { addPost } from "../hooks/posts-repo";
import type { PostWithoutId } from "../hooks/posts-repo";
import { useForm, SubmitHandler } from "react-hook-form";

const CreatePostForm = () => {
  const {
    register,
    handleSubmit: submitNewPost,
    formState: { errors },
  } = useForm<PostWithoutId>();

  const onSubmit: SubmitHandler<PostWithoutId> = (data) => addPost(data);

  return (
    <form onSubmit={submitNewPost(onSubmit)}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span>title</span>
        <input {...register("title", { required: true })} />
        {errors.title && <span>This field is required</span>}
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <span>userId</span>
        <input {...register("userId", { required: true })} />
        {errors.userId && <span>This field is required</span>}
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span>body</span>
        <input {...register("body", { required: true })} />
        {errors.body && <span>This field is required</span>}
      </div>

      <button type="submit">Create Post</button>
    </form>
  );
};

export default CreatePostForm;
