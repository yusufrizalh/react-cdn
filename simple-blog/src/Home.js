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

  const handleClick = () => {
    setName("Yusuf");
    setEmail("yusuf@email.com");
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>{name}</p>
      <p>{email}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Home;
