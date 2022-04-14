import React, {useState} from 'react';
import {createUser} from '../Functions/userCommands'


export default function Register() {
 
  const [user, setUser] = useState({name: null, email: null, registered: false});


  return (
  <div className="register-form">
    <h2>{!user.registered ? "Sign Up" : "Successfully Registered"}</h2>
    <input 
    placeholder="Name" 
    onChange={(e) => {
      setUser(prev => {
        return {...prev, name: e.target.value}
      })
    }}
    ></input>
    <input 
    placeholder="Email"
    onChange={(e) => {
      setUser(prev => {
        return {...prev, email: e.target.value}
      })
    }}
    ></input>
    <button 
    onClick={() => {
      console.log(`${user.name} saved with email: ${user.email}`);
      if(user.name != null && user.email != null ) {
          createUser(user.name, user.email);
          setUser(prev => {
           return {...prev, registered: true}
          })
      }
    }}>
      Register</button>
  </div>
  )
  
}
