import { render } from '@testing-library/react';
import React, {useState} from 'react';
import './App.css';


// this is what im sending to

class  Things extends React.Component{
    constructor(props){
        super(props)
        this.state={
            list:props.list
        }
        console.log(this.state.list)
    }
    render(){ 
        
        return (<div class="section" className="App">
            <a id="leftIt" href={this.state.list[0]}>{this.state.list[1]}</a>
            <p id="rightIt">Price: {this.state.list[2]}</p>
        </div>)
    }
}

class CustomPart extends React.Component{
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
            "case": [[
                "https://kbdfans.com/collections/tofu65/products/fully-assembled-tofu65-black-hot-swap-mechanical-keyboard-with-cement-grey-pbt-dye-sub-keycaps",
                "tofu 65 assembled",
                200
            ],[
                "https://novelkeys.com/collections/top-dogs/products/nk65-tfue-edition",
                "tfue keycaps",
                80
            ]],
            "switches":[],
            "keycaps":[],
            "artisans":[],
            "accesories":[],
        };

        this.addThing = this.addThing.bind(this);
        this.clear = this.clear.bind(this);
    }
      

    addThing(whichList){

        let link = prompt("whats the link");
        let item = prompt("whats name of the item");
        let price = prompt("whats the price, only put in numbers otherwise will causes error")
        
        price = parseInt(price,10);

        let thingtoPut=[];
        this.state[whichList].map((part)=>{
            thingtoPut.push(part);
        })
        thingtoPut.push([link,item,price])
        console.log(thingtoPut)
        //TODO have this line working console.log(this.state[whichList]);
        this.setState({ [whichList] :thingtoPut});
        console.log(this.state[whichList]);
        // https://stackoverflow.com/questions/29886552/why-are-objects-not-iterable-in-javascript look at this to add object into state

        //  okay I think to by pass I can just run it as a list:[(da link here),(name be here),(price)]
    }

    clear(whichList){
        this.setState({whichList:null})
        console.log(this.state.whichList)
    }

    totPrice(DaState){
        let goThrough = ["case","switches","keycaps","artisans","accesories"]
        let price = 0;

        goThrough.map((place) =>{
            let newPlace = DaState[place];
            for (let i=0;i<newPlace.length;i++){
                price += newPlace[i][2]
            }
        });
        return ""+price
    }

    
    render(){
        // TODO: follow this thing down below
        // im gonna try to  follow the https://www.w3schools.com/react/react_lists.asp 

        // want this line, bu tcauses errors {this.state.case.map((part) => <Things list={part}/>)}

        return(
            <div className="app Section">
                <div id="case" class="werPart">
                    <h4>case</h4>
                    {this.state["case"].map((part) => <Things list={part}/>)}
                    <button onClick={()=> this.clear("case")}>Clear</button>
                    <button onClick={() => this.addThing("case")}>Add Part</button>
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
                <p>Price: {this.totPrice(this.state)}</p><button>Button price tester</button>
            </div>
            
        )
    }
    
}
export default CustomPart;