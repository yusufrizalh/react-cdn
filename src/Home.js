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

  const [blogs, setBlogs] = useState(null);

  // penggunaan hook useEffect
  useEffect(() => {
    fetch("http://localhost:8001/blogs") // endpoint
      .then((result) => {
        return result.json();
      })
      .then((dataJson) => {
        // console.log(dataJson);
        setBlogs(dataJson);
      });
  }, []);

  return (
    <div className="home">
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
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
