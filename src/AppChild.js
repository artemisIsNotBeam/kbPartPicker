import { render } from '@testing-library/react';
import React from 'react';
import './App.css';


// this is what im sending to

class  Things extends React.Component{
    constructor(props){
        super(props)

        console.log(props.list)
        
        this.state={
            list:props.list
        }

        console.log("number 2 is coming right up");
        console.log(this.state.list)
    }

    daCode(forList){
        return (<div class="section" className="App">
            <a id="leftIt" href={forList["link"]}>{forList["name"]}</a>
            <p id="rightIt">Price: {forList["price"]}</p>
        </div>)
    }

    render(){ 
        let renderThing = this.daCode(this.state.list);
        return(<renderThing/>)
    }
}

class CustomPart extends React.Component{
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
            case: [{
                "link":"https://kbdfans.com/collections/tofu65/products/fully-assembled-tofu65-black-hot-swap-mechanical-keyboard-with-cement-grey-pbt-dye-sub-keycaps",
                "name":"tofu 65 assembled",
                "price":"$200"
            },{
                "link":"https://novelkeys.com/collections/top-dogs/products/nk65-tfue-edition",
                "name":"tfue keycaps"
            }],
            switches:[],
            keycaps:[],
            artisans:[],
            accesories:[],
        };

        this.addThing = this.addThing.bind();
    }
      

    addThing(whichList){
        let link = prompt("whats the link");
        let item = prompt("whats name of the item");
        let price = prompt("whats the price")
        
        let tempList = {"link":link,"item":item,"price":price}; 
        //TODO have this line working console.log(this.state[whichList]);

        this.setState={case:tempList}
        console.log("ran function, new state");
        console.log(this.state.case)
    }

    
    render(){
        // TODO: follow this thing down below
        // im gonna try to  follow the https://www.w3schools.com/react/react_lists.asp 
        // {this.case.map((kbPart) => <Things link={kbPart.link} name={kbPart.name} price={kbPart.price}/>)}

        return(
            <div className="App">
                <div id="case" class="werPart">
                    <h4>case</h4>
                    {this.state.case.map((part) => <Things list={part}/>)}

                    <button>Clear</button>
                    <button onClick={() => this.addThing(0)}>Add Part</button>
                </div>

                <div id="switches" class="werPart">
                    <h4>switches</h4>
                    <button>Clear</button>
                    <button>Add Part</button>
                </div>

                <div id="keycaps" class="werPart">
                    <h4>keycaps</h4>
                    <button>Clear</button>
                    <button>Add Part</button>
                </div>

                <div id="artisans" class="werPart">
                    <h4>artisans, hint: try etsy</h4>
                    <button>Clear</button>
                    <button>Add Part</button>
                </div>

                <div id="accesories" class="werPart">
                    <h4>accesories, include: cables,o rings, etc</h4>
                    <button>Clear</button>
                    <button>Add Part</button>
                </div>
                <p>Price</p>
            </div>
            
        )
    }
    
}
export default CustomPart;