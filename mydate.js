function mydate() {
  const dateElement = React.createElement(
    "h2",
    { className: "mydate" },
    "It is " + new Date().toLocaleTimeString()
  );
  ReactDOM.render(dateElement, document.getElementById("mydate"));
}

setInterval(mydate, 1000);
