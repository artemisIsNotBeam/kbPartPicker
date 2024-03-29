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
        return (<div class="section" className="item">
            <a class="oneItem" href={this.state.list[0]}>{this.state.list[1]}</a>
            <p class="oneItem">Price: {this.state.list[2]}</p>
            <button class="oneItem" onClick={()=>this.props.delete(this.state.list)}>Delete Element</button>
        </div>)
    }
}

class CustomPart extends React.Component{
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
            "case": [],
            "switches":[],
            "keycaps":[],
            "artisans":[],
            "accesories":[],
            "goThrough":["case","switches","keycaps","artisans","accesories"],
            "message":"when you hit export, this text will change. Save this in a document. When import next paste this list there"
        };

        this.addThing = this.addThing.bind(this);
        this.clear = this.clear.bind(this);
        this.import = this.import.bind(this);
        this.delete = this.delete.bind(this);
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
        this.setState({[whichList]:[]})
    }

    totPrice(DaState){
        let price = 0;

        DaState["goThrough"].map((place) =>{
            let newPlace = DaState[place];
            for (let i=0;i<newPlace.length;i++){
                price += newPlace[i][2]
            }
        });
        return ""+price
    }

    import(goThroughfake){
        let orignal = prompt("what was your export prompt");
        let arr = orignal.split(";/|");
        
        for (let i=0;i<goThroughfake.length;i++){
            let arrOfPlace = arr[i].split(' ;/; ');
            
            for(let j=0;j<arrOfPlace.length;j++){
                let newArray = arrOfPlace[j].split(',');
                newArray = newArray.filter(Boolean);

                let thingtoPut=[];
                this.state[goThroughfake[i]].map((part)=>{
                    thingtoPut.push(part);
                })
                thingtoPut.push(newArray)
                console.log(newArray);
                
                if(newArray.length === 3){
                    this.setState({ [goThroughfake[i]] : thingtoPut});
                }
            }

            
        }
    }

    export(stateDoe){
        let ourLog = [];
        // code for us
        // https://stackoverflow.com/questions/28252888/javascript-how-to-save-prompt-input-into-array
        stateDoe["goThrough"].map((place) =>{
            let newPlace = this.state[place];
            ourLog.push(`${newPlace.map((thing) => ""+thing+" ;/; ")}`);
            if (place !== "accesories"){
                ourLog.push(";/|");
            }
        });

        this.setState({ "message": ourLog});
    }

    delete(theirList){
        this.state["goThrough"].map((place)=>{
            let newPlace = this.state[place];
            // running through the list
            newPlace.map(newNewPlace =>{

                if( newNewPlace === theirList){
                    this.setState({
                        [place]: newNewPlace.filter((i) => i === theirList)
                    })
                }
            })

        })
    }
    
    render(){
        // TODO: follow this thing down below
        // im gonna try to  follow the https://www.w3schools.com/react/react_lists.asp 

        // want this line, bu tcauses errors {this.state.case.map((part) => <Things list={part}/>)}

        return(
            <div className="app Section">
                <p>Tip:<bold> if you want this to work make sure there are no commas in your link, price, or name</bold></p>
                <div id="case" class="werPart">
                    <h4>case</h4>
                    {this.state["case"].map((part) => <Things list={part} delete={this.delete}/>)}
                    <button onClick={()=> this.clear("case")}>Clear</button>
                    <button onClick={() => this.addThing("case")}>Add Part</button>
                </div>

                <div id="switches" class="werPart">
                    <h4>switches</h4>
                    {this.state["switches"].map((part) => <Things list={part} delete={this.delete}/>)}
                    <button onClick={()=> this.clear("switches")}>Clear</button>
                    <button onClick={() => this.addThing("switches")}>Add Part</button>
                </div>

                <div id="keycaps" class="werPart">
                    <h4>keycaps</h4>
                    {this.state["keycaps"].map((part) => <Things list={part} delete={this.delete}/>)}
                    <button onClick={()=> this.clear("keycaps")}>Clear</button>
                    <button onClick={() => this.addThing("keycaps")}>Add Part</button>
                </div>

                <div id="artisans" class="werPart">
                    <h4>artisans, hint: try etsy</h4>
                    {this.state["artisans"].map((part) => <Things list={part} delete={this.delete}/>)}
                    <button onClick={()=> this.clear("artisans")}>Clear</button>
                    <button onClick={() => this.addThing("artisans")}>Add Part</button>
                </div>

                <div id="accesories" class="werPart">
                    <h4>accesories, include: cables,o rings, etc</h4>
                    {this.state["accesories"].map((part) => <Things list={part} delete={this.delete}/>)}
                    <button onClick={()=> this.clear("accesories")}>Clear</button>
                    <button onClick={() => this.addThing("accesories")}>Add Part</button>
                </div>
                <p>Price: {this.totPrice(this.state)}</p>
                {this.state.message}
                <div>
                    <button onClick={()=> this.import(this.state["goThrough"])}>import</button>
                    <button onClick={() => this.export(this.state)}>export</button>
                </div>
            </div>
            
        )
    }
    
}
export default CustomPart;