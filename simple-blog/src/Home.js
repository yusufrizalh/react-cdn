/*
    # Komponen Reactive:
      > komponen yang nilainya dapat berubah secara otomatis
      > tanpa perlu adanya refresh/reload
      > aktifkan dengan Hook useState 
    # Komponen Auto run:
      > komponen dijalankan secara otomatis tanpa perlu dipanggil
      > menggunakan Hook useEffect
*/

import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  // buat suatu method untuk dijalankan
  // pada React = () => disebut dengan Hook

  const [name, setName] = useState("Yusuf Rizal");

  // penggunaan hook useEffect
  useEffect(() => {
    console.log("useEffect is here");
    console.log(name);
  }, [name]);

  // penggunaan hook useState
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

  const handleDeleteBlog = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  return (
    <div className="home">
      <BlogList
        blogs={blogs}
        title="All Blogs"
        handleDeleteBlog={handleDeleteBlog}
      />

      <button onClick={() => setName("James Arthur")}>Change Name</button>
      <p>{name}</p>

      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === "Rizal")}
        title="Rizal's Blog"
      /> */}
    </div>
  );
};

export default Home;

/*
    # Perbedaan operator perbandingan
      > = assignment -> a = 10
      > == compare -> nilainya saja a == 10
      > === compare -> nilai dan tipe datanya a === 10 
*/

/*
// assignment
a = 10; // integer
b = "10"; // string

// compare dengan == : membandingkan nilainya saja
a == b; // true

// compare dengan === : membandingkan nilai dan tipe data
a === b; // false
*/
