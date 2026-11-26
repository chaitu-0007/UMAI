import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log(props);

        this.state = {
            userInfo:{
                name : "dummyname",
                location : "dummylocation",
                avatar_url:"http/dummying.com/"
            },
        };
    }

    async componentDidMount(){
       const data = await fetch("https://api.github.com/users/chaitu-0007")
       const json = await data.json();

       this.setState({
        userInfo:json,

        
       });
       console.log(json);
    }

    render(){
        const {name,location,avatar_url}=this.state.userInfo;
        return(
        <div className="user-card">
            <img src="{avatar_url}"/>
            <h2>Name: {name} </h2>
            <h2>contact: chaitanya_46</h2>
            <h2>location: {location}</h2>
            
        </div>
       );
    }
}
export default UserClass;