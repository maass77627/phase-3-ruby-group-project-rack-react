import React, { useEffect } from "react";
import './App.css';
import { useState } from 'react';
import FoodContainer from "./FoodContainer";

function App() {

  const [foods, setFoods] = useState([])

useEffect(()=> {
  fetch("http://localhost:3000/foods")
  .then((response) => response.json())
  .then((json) => {
    setFoods(json)
    console.log(json)})

}, [])



  return (
    <div className="App">
     <FoodContainer></FoodContainer>
    </div>
  );
}

export default App;
