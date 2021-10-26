import { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Filters from './Filters';
import SocialCard from './SocialCard';

function App() {

  const [users ,setUsers]=useState([]);
  const [allusers ,setAllUsers]=useState([]);

  
  useEffect(()=>{
    (async()=>{
      let userData;
      try{
        const response = await fetch('http://localhost:3001/doctors/list');
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
      <Header/>
      <Filters/>
      <input className="search-box" placeholder="Search..." onInput={filterCards}/>
      <h1>Available Doctor's</h1>
      <div className="cards-container">
        {users.map((user, index) => (
          <SocialCard userData={user} key={index}/>       
        ))}
      </div>
    </div>
  );
}

export default App;
