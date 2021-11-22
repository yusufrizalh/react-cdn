"use strict";

const element = React.createElement;

class MyButton extends React.Component {
  constructor(props) {
    super(props);
    // inisialisasi nilai awal
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return "You liked this!";
    }

    return element(
      "button",
      { onClick: () => this.setState({ liked: true }) },
      "Like This"
    );
  }
}

const domContainer = document.querySelector("#likedbutton");
ReactDOM.render(element(MyButton), domContainer);
