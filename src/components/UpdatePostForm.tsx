import { updatePost } from "../hooks/posts-repo";
import type { Post } from "../hooks/posts-repo";
import { useForm, SubmitHandler } from "react-hook-form";

const UpdatePostForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Post>();

  const onSubmit: SubmitHandler<Post> = (data) => updatePost(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span>Post ID</span>
        <input {...register("id", { required: true })} />
        {errors.userId && <span>This field is required</span>}
      </div>

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

      <button type="submit">Update Post</button>
    </form>
  );
};

export default UpdatePostForm;
