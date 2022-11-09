import logo from './logo.svg';
import './App.css';
import axios from "axios";
import React, {useEffect} from 'react'


function App() {

 useEffect(()=>{

  axios.get('https://latest-stock-price.p.rapidapi.com/price',{ params: {Indices: '<REQUIRED>'},
  headers: {
    'X-RapidAPI-Key': 'b83d6f10abmshfecd1df8d0bd910p1c4391jsnd97500d71ee9',
    'X-RapidAPI-Host': 'latest-stock-price.p.rapidapi.com'
  }})
  .then((data)=>console.log(data))

 },[])

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
