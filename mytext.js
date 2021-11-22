const name = "Andrew";

const elementText = React.createElement(
  "h3",
  { className: "greeting" },
  "Hello, " + name
);

ReactDOM.render(elementText, document.getElementById("greeting"));
