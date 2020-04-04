import React from "react";
import "./index.css";

class Collapsible extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "default",
      open: false,
      icon: false,
    };
    if (this.props.data.category === "admin") {
      this.state.theme = "admin";
    }
    if (this.props.data.category === "marketing") {
      this.state.theme = "marketing";
    }

    this.collapse = this.collapse.bind(this);
  }

  collapse() {
    this.setState({
      theme: this.state.theme,
      open: !this.state.open,
      icon: !this.state.icon
    });
  }
  render() {
    return (
     
      <li onClick={this.collapse}>
        <button type="button" className={`collapsible ${this.state.theme}`}>
          {this.props.data.question}  <i className={`material-icons ${this.state.icon ? "icon" : "iconback"}`}>keyboard_arrow_down
</i>
        </button>
        <div className={`content ${this.state.open ? "text" : ""}`}>
          <p>
          {this.props.data.answer}
          </p>
        </div>
      </li>
    );
  }
}

export default Collapsible;
