import React from 'react';
import './App.css';


class CustomPart extends React.Component{
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
            case: {},
            switches:{},
            keycaps:{},
            artisans:{},
            accesories:{}
        };
    }
      

    render(){
        // TODO: follow this thing down below
        // im gonna try to  follow the https://www.w3schools.com/react/react_lists.asp 
        return(
            <div id="custompart">
                <div id="case" class="werPart">
                    <h4>case</h4>
                    <button>Add Part</button>
                </div>

                <div id="switches" class="werPart">
                    <h4>switches</h4>
                    <button>Add Part</button>
                </div>

                <div id="keycaps" class="werPart">
                    <h4>keycaps</h4>
                    <button>Add Part</button>
                </div>

                <div id="artisans" class="werPart">
                    <h4>artisans, hint: try etsy</h4>
                    <button>Add Part</button>
                </div>

                <div id="accesories" class="werPart">
                    <h4>accesories, include: cables,o rings, etc</h4>
                    <button>Add Part</button>
                </div>
                
            </div>
            
        )
    }
    
}
export default CustomPart;