import logo from './logo.svg';
import './App.css';
import Profile from './profil/Profile';
import React, { Component }  from 'react';

function App() { 
  const alertMe=()=> {
    alert ('test completed')
  }
  const fullname="alassaad benhamad"
  const bio="My name is Alassaad  a technician in optical fibers and I study web development"
  const profession="Developer"
  return (
    <div className="App">
      <header className="App-header"> 
     <Profile fullname={fullname} bio={bio} profession={profession} alertMe={alertMe} />
     <button onClick={alertMe}>clickMe</button> 
      </header>
    </div>
  
  );
}

export default App;
