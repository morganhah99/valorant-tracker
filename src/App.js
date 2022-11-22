import axios from 'axios';
import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [userName, setUserName] = useState("")
  const [accountLevel, setAccountLevel] = useState(0)
  const [currentRank, setCurrentRank] = useState("")
  const [mapName, setMapName] = useState("")
  const [matchTime, setMatchTime] = useState("")
  const [roundWins, setRoundWins] = useState(0)
  const [roundLoses, setRoundLoses] = useState(0)
  const [kills, setKills] = useState(0)
  const [deaths, setDeaths] = useState(0)
  const [character, setCharacter] = useState("")

  useEffect(() => {
  axios.get('https://api.henrikdev.xyz/valorant/v1/account/peanutdamage/ftp')
    .then(res => {
      setUserName(res.data.data.name)
    })
  axios.get('https://api.henrikdev.xyz/valorant/v1/account/peanutdamage/ftp')
    .then(res => {
      setAccountLevel(res.data.data.account_level)
    })
    axios.get('https://api.henrikdev.xyz/valorant/v1/mmr-history/na/peanutdamage/ftp')
    .then(res => {
      setCurrentRank(res.data.data[0].currenttierpatched)
    })
    axios.get('https://api.henrikdev.xyz/valorant/v3/matches/na/peanutdamage/ftp?filter=competitive')
    .then(res => {
      setMapName(res.data.data[0].metadata.map)
    })
    axios.get('https://api.henrikdev.xyz/valorant/v3/matches/na/peanutdamage/ftp?filter=competitive')
    .then(res => {
      setMatchTime(res.data.data[0].metadata.game_start_patched)
    })
    axios.get('https://api.henrikdev.xyz/valorant/v3/matches/na/peanutdamage/ftp?filter=competitive')
    .then(res => {
      setRoundWins(res.data.data[0].teams.red.rounds_won)
    })
    axios.get('https://api.henrikdev.xyz/valorant/v3/matches/na/peanutdamage/ftp?filter=competitive')
    .then(res => {
      setRoundLoses(res.data.data[0].teams.red.rounds_lost)
    })
    axios.get('https://api.henrikdev.xyz/valorant/v3/matches/na/peanutdamage/ftp?filter=competitive')
    .then(res => {
      setKills(res.data.data[0].players.all_players[3].stats.kills)
    })
    axios.get('https://api.henrikdev.xyz/valorant/v3/matches/na/peanutdamage/ftp?filter=competitive')
    .then(res => {
      setDeaths(res.data.data[0].players.all_players[3].stats.deaths)
    })
    axios.get('https://api.henrikdev.xyz/valorant/v3/matches/na/peanutdamage/ftp?filter=competitive')
    .then(res => {
      setCharacter(res.data.data[0].players.all_players[3].character)
    })
  }, [])
  return (
    <div className="App">
      <div><p>Username: {userName}</p> Account level: {accountLevel}</div>
      <div className='currentRank'>Current Rank: {currentRank}</div>
      <div className='match'>Map: {mapName}</div>
      <div className='character'>Character: {character}</div>
      <div className='matchTime'>Match Time: {matchTime}</div>
      <div className='matchScore'>Match Score: {roundWins} - {roundLoses}</div>
      <div className='kd'>KD: {kills} - {deaths}</div>
    </div>
  );
}

export default App;
