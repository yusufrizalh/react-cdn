import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("James");

  const handleSubmit = (event) => {
    event.preventDefault(); // untuk menghindari adanya refresh
    const blog = { title, body, author };
    console.log(blog);

    fetch("http://localhost:8001/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    })
      .then(() => {
        console.log("New blog added");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title: </label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body: </label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author: </label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Yusuf">Yusuf</option>
          <option value="Rizal">Rizal</option>
          <option value="James">James</option>
        </select>
        <button>Add Blog</button>
        <br />
        <br />
        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
      </form>
    </div>
  );
};

export default Create;
