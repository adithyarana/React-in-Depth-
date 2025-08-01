// this is the class based component
// this exxtend keyword know this is the class based components

// in the class based componet first constructor then render then componentDidMount is called 

import React from "react";
import Usercontext from "../utils/Usercontext";

class Userclass extends React.Component {
  // this is the way to get props in class based components
  constructor(props) {
    super(props);
    console.log("constructor");

    this.state = { 
       userinfo:{
        name:"",
        location:"",
        image:null
       }
    };
  }

  // this is to make an api call
  async componentDidMount(){
    console.log("componentDidMount");
    // Api call here

    const data = await fetch("https://api.github.com/users/adithyarana");
    const json= await data.json();

    this.setState({
        userinfo:{
            name:json.name,
            location:json.location,
            image:json.avatar_url
        }
    })
    console.log(json);

    
  }

  componentDidUpdate(){
    console.log("componentDidUpdate");
  }


  render() {
    
    const {name , location , image} = this.state.userinfo;


    console.log("render");
    return (
      <div className="card">
        <div>
        <p>this is the class based component</p> 
        <h2>Name:{name}</h2>
        <h3>Loacation:{location}</h3>
        </div>
        <img src={image} alt="image" />
      </div>
    );
  }
}

export default Userclass;
