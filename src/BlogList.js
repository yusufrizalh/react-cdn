const BlogList = ({ blogs, title, handleDeleteBlog }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <img src={blog.avatar} width="40px" height="40px" alt="Avatar" />
          <p>Writen by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
