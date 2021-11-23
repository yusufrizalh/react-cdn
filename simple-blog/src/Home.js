/*
    # Komponen Reactive:
      > komponen yang nilainya dapat berubah secara otomatis
      > tanpa perlu adanya refresh/reload
      > aktifkan dengan Hook useState 
*/

import { useState } from "react";

const Home = () => {
  // buat suatu method untuk dijalankan
  // pada React = () => disebut dengan Hook

  // penggunaan hook useState
  const [name, setName] = useState("Rizal");
  const [email, setEmail] = useState("rizal@inixindo.co.id");
  const [blogs, setBlogs] = useState([
    {
      title: "My New Website",
      body: "This is my new website",
      author: "Yusuf",
      id: 1,
    },
    {
      title: "Welcome to My Web",
      body: "My web is from React",
      author: "Rizal",
      id: 2,
    },
    {
      title: "Web Development with React",
      body: "Learn React from the scratch",
      author: "Yusuf",
      id: 3,
    },
    {
      title: "React.js Top Tips",
      body: "React is so easy",
      author: "Rizal",
      id: 4,
    },
    {
      title: "React Hook",
      body: "Learn React Hook with useState",
      author: "James",
      id: 5,
    },
  ]);

  const handleClick = () => {
    setName("Yusuf");
    setEmail("yusuf@email.com");
  };

  return (
    <div className="home">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Writen by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
