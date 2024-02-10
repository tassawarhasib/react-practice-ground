import './App.css';
import Card from "./Components/user-card/card";
import React, { useEffect, useState } from 'react'

function App() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?page=1&results=1&seed=abc')
      .then((response) => response.json())
      .then((data) => {
        setUserData(data.results);
      });
  }, []);


  return (
    <div className="App">
      {userData.map((user) => (
        <Card key={userData.email} userData={userData} />
      ))}
    </div>
  );
}

export default App;
