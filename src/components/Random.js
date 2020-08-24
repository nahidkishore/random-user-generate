import React from 'react';
import './Random.css'

const Random = (props) => {
  return (
    <div className="container">
   <div className="random">
      
       <img src={props.image} alt=""/>
        <h2 >{props.name}</h2>
     
     
        <h5> Gender :{props.gender}</h5>
        <h5> Phone : {props.phone}</h5>
        <h5> Email : {props.email}</h5>
        <h5> Country : {props.country}</h5>
      
    </div>
    </div>
    
  );
};

export default Random;