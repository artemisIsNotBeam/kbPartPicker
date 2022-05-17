import React from 'react';
import './App.css';


// this is what im sending to

function Things(props){
    return <div class="section">
        <p id="leftIt">link: <a>{props.link}</a></p>
        <p id="cent">Item: {props.name}</p>
        <p id="rightIt">Price: {props.price}</p>
    </div>
}

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

        this.addThing = this.addThing.bind();
    }
      

    addThing(whichList){
        let link = prompt("whats the link");
        let item = prompt("whats name of the item");
        let price = prompt("whats the price")
        console.log("I ran");
    }

    
    render(){
        // TODO: follow this thing down below
        // im gonna try to  follow the https://www.w3schools.com/react/react_lists.asp 
        return(
            <div id="custompart">
                <div id="case" class="werPart">
                    <h4>case</h4>
                    <Things link="https://novelkeys.com/collections/top-dogs/products/nk65-tfue-edition" name="tfue keycaps" price="35"></Things>
                    <button onClick={() => this.addThing}>Add Part</button>
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
                <p>Price</p>
            </div>
            
        )
    }
    
}
export default CustomPart;