import React, { useEffect } from "react";
import './App.css';
import { useState } from 'react';
import FoodContainer from "./FoodContainer";
import DailyIntake from "./DailyIntake";
import Nav from "./Nav";
 import { BrowserRouter, Routes, Route} from 'react-router-dom';
 import Data from "./Data";

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


const Home = () => (
  <div id="new">
 <FoodContainer setDailyfood={setDailyfood} dailyfood={dailyfood} foods={foods}></FoodContainer>
     <DailyIntake dailyfood={dailyfood}></DailyIntake>
  </div>
);



  return (
    <div className="App">
      {/* <Nav></Nav> */}
      {/* <FoodContainer setDailyfood={setDailyfood} dailyfood={dailyfood} foods={foods}></FoodContainer>
      <DailyIntake dailyfood={dailyfood}></DailyIntake>  */}



     <BrowserRouter>
       <Nav/>
        <Routes>
        
        <Route path="/" element={Home()}/>
          <Route path="/data" element={<Data />}></Route>
        </Routes>
       </BrowserRouter> 
    </div>
  );
}

export default App;
