const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Simple Blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a
          href="/create"
          style={{
            color: "white",
            backgroundColor: "#bf0000",
            borderRadius: "15px",
          }}
        >
          New Blog
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
