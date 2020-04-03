import React from "react";
import "./index.css";
import "materialize-css/dist/css/materialize.min.css"
import M from "materialize-css" 


class Collapsible extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: "gray",
        }
       if (this.props.data.category === "admin"){this.state.theme = "orange"};
       if (this.props.data.category === "marketing"){this.state.theme = "green"};
        
        this.collapse = this.collapse.bind(this);
    }

    collapse() {
        this.setState({
                theme:this.state.theme,
        })
    }
    render() {
        document.addEventListener('DOMContentLoaded', function() {
            var instances = M.Collapsible.init(document.querySelectorAll('.collapsible'));
          });
        return( 
        
            <li onClick= {this.collapse}>
              <div className={`${this.state.theme} collapsible-header`}><span>{this.props.data.question} </span><i className="material-icons">keyboard_arrow_down</i></div>
              <div className="collapsible-body"><span className="">{this.props.data.answer}</span></div>
            </li>
            
        )
        
        }
}

export default Collapsible;








 