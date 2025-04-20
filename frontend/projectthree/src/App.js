import React, { useEffect } from "react";
import './App.css';
import { useState } from 'react';
import FoodContainer from "./FoodContainer";
import DailyIntake from "./DailyIntake";
import Nav from "./Nav";

function App() {

  const [foods, setFoods] = useState([])
  const [dailyfood, setDailyfood] = useState([])

useEffect(()=> {
  fetch("http://localhost:9292/foods")
  .then((response) => response.json())
  .then((json) => {
    setFoods(json)
    console.log(json)})

}, [])



  return (
    <div className="App">
      <Nav></Nav>
     <FoodContainer setDailyfood={setDailyfood} dailyfood={dailyfood} foods={foods}></FoodContainer>
     <DailyIntake dailyfood={dailyfood}></DailyIntake>
    </div>
  );
}

export default App;
