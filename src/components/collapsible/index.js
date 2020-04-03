import React from "react";
import "./index.css";
import "materialize-css/dist/css/materialize.min.css"
import M from "materialize-css" 

class Collapsible extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: "",
        }
        this.collapse = this.collapse.bind(this);
    }

    collapse() {
        this.setState({
                theme:"",
        })
    }
    render() {
        document.addEventListener('DOMContentLoaded', function() {
            var instances = M.Collapsible.init(document.querySelectorAll('.collapsible'));
          });
        return( 
        
            <li onClick= {this.collapse}>
              <div class="collapsible-header"><i class="material-icons">filter_drama</i>First</div>
              <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
            </li>
            
        )
        
        }
}

export default Collapsible;








 