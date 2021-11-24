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
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // penggunaan hook useEffect
  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8001/blogs") // endpoint
        .then((result) => {
          // console.log(result);
          if (!result.ok) {
            throw Error("Could not fetch data for resources!");
          }
          return result.json();
        })
        .then((dataJson) => {
          // console.log(dataJson);
          setBlogs(dataJson);
          setIsLoading(false);
        })
        .catch((error) => {
          // console.log(error.message);
          setError(error.message);
        });
    }, 4000);
  }, []);

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading.....</div>}
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
