import "./App.css";

function App() {
  const title = "Welcome to React Inixindo";
  const likes = 100;
  const person = { name: "stephanie", email: "stephanie@email.com" }; // type object
  const link = "https://www.inixindo.id";
  return (
    <div className="App">
      <header className="App-header">
        <h3>{title}</h3>
        <p>Liked {likes} times.</p>

        <p>
          <a href={link}>Inixindo Site</a>
        </p>

        <p>{1000}</p>
        <p>{"Hello Inixindo"}</p>
        <p>{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}</p>
        <p>{Math.random() * 10}</p>
      </header>
    </div>
  );
}

export default App;
