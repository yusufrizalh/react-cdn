const Home = () => {
  // buat suatu method untuk dijalankan
  // pada React = () => disebut dengan Hook
  const handleClick = (name) => {
    console.log("Hello, " + name);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <button
        onClick={() => {
          handleClick("James");
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default Home;
