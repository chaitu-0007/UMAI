
import { useState } from "react";
const User = ({ name,location,contact })=>{
    const [count]=useState(0);
    const [count1]=useState(1);
    return(

        <div className="user-card">
            <h1>count:{count}</h1>
            <h1>count:{count1}</h1>
            <h2>Name:{name} </h2>
            <h2>contact:{location} </h2>
            <h2>location:{contact}</h2>
            
        </div>
    );
};

export default User;