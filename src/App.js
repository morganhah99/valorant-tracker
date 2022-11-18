import axios from 'axios';
import './App.css';
import { useState } from 'react';

function App() {

  const [userName, setUserName] = useState("")
  const [accountLevel, setAccountLevel] = useState(0)

  axios.get('https://api.henrikdev.xyz/valorant/v1/account/peanutdamage/ftp')
    .then(res => {
      setUserName(res.data.data.name)
    })
  axios.get('https://api.henrikdev.xyz/valorant/v1/account/peanutdamage/ftp')
    .then(res => {
      setAccountLevel(res.data.data.account_level)
    })
  return (
    <div className="App">
      <p>Username: {userName}</p> Account level: {accountLevel}
    </div>
  );
}

export default App;
