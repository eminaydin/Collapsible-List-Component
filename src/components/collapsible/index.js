import React from "react";
import "./index.css";

class Collapsible extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "gray",
    };
    if (this.props.data.category === "admin") {
      this.state.theme = "orange";
    }
    if (this.props.data.category === "marketing") {
      this.state.theme = "green";
    }

    this.collapse = this.collapse.bind(this);
  }

  collapse() {
    this.setState({
      theme: this.state.theme,
    });
  }
  render() {
    return (
      //     <li onClick= {this.collapse} >
      //     <details className= {this.state.theme}>
      //     <summary>{this.props.data.question}</summary>
      //    <p>{this.props.data.answer}</p>
      //   </details>
      //   </li>
      <li onClick={this.collapse}>
        <button type="button" class="collapsible">
          {this.props.data.question}
        </button>
        <div class="content">
          <p>
          {this.props.data.answer}
          </p>
        </div>
      </li>
    );
  }
}

export default Collapsible;
