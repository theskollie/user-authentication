import React, {useState, useEffect} from 'react';
import {createUser, deleteUser} from "../Functions/userCommands"

export default function Admin() {
    const [users, setUsers] = useState(false);
    const [userArray, setUserArray] = useState(null);
    const [deleteMode, setDeleteMode] = useState(false);
   
    console.count("Rendered ")
    useEffect(() => {
        getUsers();
    }, []);

    useEffect(() => {
        setUserArray(JSON.parse(users)); 
    },[users])

    function getUsers() {
        fetch('http://localhost:3001')
            .then(response => {
                return response.text();
            })
            .then(data => {
                setUsers(data);   
            })
    }


    return (
        <div>       
                    <h1>Admin Panel</h1>
                    <br />
                    <button onClick={() =>{
                        let name = prompt("Enter Name");
                        let email = prompt("Enter Email");
                        createUser(name,email)
                    }}
                    >Add User</button>
                    <button onClick={() => setDeleteMode(prev => !prev)}>{deleteMode ? "Disable Delete" : "Enable Delete "}</button>
                    <br />
                    
                    {userArray? userArray.map(item => {
                        
                        return (
                        <div>
                        <p>
                            ID: {item.id} Name: {item.name} Email: {item.email} 
                            <input id={item.id} type="checkbox" onClick={() => {
                                if(deleteMode) {
                                    alert(`User with ID: ${item.id} deleted`)
                                    deleteUser(item.id);
                                }
                                 else {
                                     alert("You need to enable delete mode first.")
                                     document.getElementById(item.id).checked = false;
                                 }
                            }} />
                        </p>
                        
                        </div>
                        )
                        
                    }) : "No User Data"}
  
        </div>
    )
}