import axios from 'axios';
import './App.css';
import { useState } from 'react';

function App() {

  const [userName, setUserName] = useState("")
  const [userTag, setUserTag] = useState("")
  const [accountLevel, setAccountLevel] = useState("")
  const [userRank, setUserRank] = useState("")
  const [mapName, setMapName] = useState("")
  const [matchTime, setMatchTime] = useState("")
  const [roundWins, setRoundWins] = useState("")
  const [roundLoses, setRoundLoses] = useState("")

  function getUserInfoRequest() {
    axios.get(`https://api.henrikdev.xyz/valorant/v1/account/${userName}/${userTag}`)
    .then(res => {
      setAccountLevel(res.data.data.account_level)
    })
    axios.get(`https://api.henrikdev.xyz/valorant/v2/mmr/na/${userName}/${userTag}`)
    .then(res => {
      setUserRank(res.data.data.current_data.currenttierpatched)
    })
    axios.get(`https://api.henrikdev.xyz/valorant/v3/matches/na/${userName}/${userTag}?filter=competitive`)
    .then(res => {
      setMapName(res.data.data[0].metadata.map)
    })
    axios.get(`https://api.henrikdev.xyz/valorant/v3/matches/na/${userName}/${userTag}?filter=competitive`)
    .then(res => {
      setMatchTime(res.data.data[0].metadata.game_start_patched)
    })
    axios.get(`https://api.henrikdev.xyz/valorant/v3/matches/na/${userName}/${userTag}?filter=competitive`)
    .then(res => {
      setRoundWins(res.data.data[0].teams.red.rounds_won)
    })
    axios.get(`https://api.henrikdev.xyz/valorant/v3/matches/na/${userName}/${userTag}?filter=competitive`)
    .then(res => {
      setRoundLoses(res.data.data[0].teams.red.rounds_lost)
    })
    
  }

  return (
    <div className="App">
      <input type="text" placeholder="username" onChange={e => setUserName(e.target.value)} />
      <input type="text" placeholder="tag" onChange={e => setUserTag(e.target.value)} />
      <button onClick={getUserInfoRequest}>submit</button>
      <div>Account Level: {accountLevel}</div>
      <div>Account Rank: {userRank}</div>
      <div className='headers'>Last Match</div>
      <div className='history'>
          <p>{mapName}</p>
          <p>{matchTime}</p>
          <p>{roundWins}:{roundLoses}</p>
      </div>
    </div>
  );
}

export default App;
