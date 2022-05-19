import { render } from '@testing-library/react';
import React from 'react';
import './App.css';


// this is what im sending to

class  Things extends React.Component{
    constructor(props){
        super(props)
    }

    deleteElement(){
        
    }

    render(){ 
        return <div class="section" className="App">
            <a id="leftIt" href={this.props.link}>{this.props.name}</a>
            <p id="rightIt">Price: {this.props.price}</p>
            <button>Deleted</button>
        </div>
    }
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

        let ele = <Things link={link} item={item} price={price}></Things>
        this.case = [ele];
    }

    
    render(){
        // TODO: follow this thing down below
        // im gonna try to  follow the https://www.w3schools.com/react/react_lists.asp 
        return(
            <div className="App">
                <div id="case" class="werPart">
                    <h4>case</h4>
                    {this.case}
                    <button onClick={this.addThing}>Add Part</button>
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