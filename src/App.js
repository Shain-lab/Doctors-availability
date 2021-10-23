import { useState, useEffect } from 'react';
import './App.css';
import SocialCard from './SocialCard';

function App() {

  const [users ,setUsers]=useState([]);
  const [allusers ,setAllUsers]=useState([]);

  
  useEffect(()=>{
    (async()=>{
      let userData;
      try{
        const response = await fetch('https://randomuser.me/api/?results=10');
        userData = (await response.json()).results;
      }catch(err){
        console.log(err);
        userData = [];
      }
      setAllUsers(userData);
      setUsers(userData);
    })();
  }, []);

  const filterCards = event => {
    const value = event.target.value.toLowerCase();
    const filterUsers = allusers.filter(
      user => (`${user.name.first} ${user.name.last}`.toLowerCase().includes(value))
    );
      setUsers(filterUsers);
  };

  return (
    <div className="App">
      <input className="search-box" placeholder="Search..." onInput={filterCards}/>
      <h1>Random Generation</h1>
      <div className="cards-container">
        {users.map((user, index) => (
          <SocialCard userData={user} key={index}/>       
        ))}
      </div>
    </div>
  );
}

export default App;
