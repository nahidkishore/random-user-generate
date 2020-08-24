import React, { useState, useEffect } from 'react';
import Random from './Random';
import './User.css'

const User = () => {
  const [users, setUsers]=useState([])
  useEffect(()=>{
    fetch('https://randomuser.me/api/?results=3')
    .then(res=>res.json())
    .then(data=>setUsers(data.results))
  },[])
  return (
    <div className="container">
      <h2 className="heading">Random User Generate</h2> <br/>
      <div>
        {
          users.map(user=> <div className="user"> <Random  key={user.id.value} name={user.name.first + '' + user.name.last} image={user.picture.large} gender={user.gender} phone={user.phone} email={user.email} country={user.location.country}></Random> </div>)
        }
      </div>
      
      <button onClick={reload} className="refresh-btn">Refresh</button>
      
    </div>
  );
};
const reload = () => window.location.reload();

export default User;