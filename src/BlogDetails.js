import { useParams } from "react-router-dom";
import UseFetch from "./UseFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    isLoading,
    error,
  } = UseFetch("http://localhost:8001/blogs/" + id);

  return (
    <div className="blog-details">
      {isLoading && <div>Loading.....</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <img src={blog.avatar} alt="Avatar" width="100px" height="100px" />
          <p>Writen by {blog.author}</p>
          <div>{blog.body}</div>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
