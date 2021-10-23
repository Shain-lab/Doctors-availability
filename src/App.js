import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [users ,setUsers]=useState([]);
  useEffect(()=>{
    (async()=>{
      let userData;
      try{
        const response = await fetch('https://randomuser.me/api/?results=10');
        const userData = await response.json().results;
      }catch(err){
        console.log(err);
        userData = [];
      }
      setUsers(userData);
    })();
  }, []);
  return (
    <div className="App">
      {users.map((user,index)=>(
        <SocialCard userData={user} key={index} />  
      ))}
    </div>
  );
}

export default App;
