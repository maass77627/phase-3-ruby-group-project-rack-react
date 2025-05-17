import React, { useEffect } from "react";
import './App.css';
import { useState } from 'react';
import FoodContainer from "./FoodContainer";
import DailyIntake from "./DailyIntake";
import Nav from "./Nav";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Data from "./Data";
import NewForm from "./NewForm";

function App() {

  const [foods, setFoods] = useState([])
  const [dailyfood, setDailyfood] = useState([])
  const [calTotal, setCalTotal] = useState(0)
  const [veg, setVeg] = useState(0)
  const [protein, setProtein] = useState(0)
  const [dairy, setDairy] = useState(0)
  const [fruit, setFruit] = useState(0)
  const [fat, setFat] = useState(0)
  const [grain, setGrain] = useState(0)

  const[monCalTotal, setMondayCalTotal] = useState("")
  const[tuesCalTotal, setTuesdayCalTotal] = useState("")
  const[wedCalTotal, setWednesdayCalTotal] = useState("")
  const[thursCalTotal, setThursdayCalTotal] = useState("")
  const[friCalTotal, setFridayCalTotal] = useState("")
  const[satCalTotal, setSaturdayCalTotal] = useState("")
  const[sunCalTotal, setSundayCalTotal] = useState("")

useEffect(()=> {
  fetch("http://localhost:9292/foods")
  .then((response) => response.json())
  .then((json) => {
    setFoods(json)
    console.log(json)})

}, [])


const Home = () => (
  <div id="new">
     <FoodContainer dairy={dairy} grain={grain} fat={fat} setDairy={setDairy} setFat={setFat} setGrain={setGrain}  setVeg={setVeg} veg={veg} setProtein={setProtein} protein={protein} setFruit={setFruit} fruit={fruit} calTotal={calTotal} setCalTotal={setCalTotal} setDailyfood={setDailyfood} dailyfood={dailyfood} foods={foods} setFoods={setFoods}></FoodContainer>
     <DailyIntake setSaturdayCalTotal={setSaturdayCalTotal} setFridayCalTotal={setFridayCalTotal} setThursdayCalTotal={setThursdayCalTotal} setWednesdayCalTotal={setWednesdayCalTotal}  setTuesdayCalTotal={setTuesdayCalTotal} setMondayCalTotal={setMondayCalTotal} setSundayCalTotal={setSundayCalTotal} setCalTotal={setCalTotal} calTotal={calTotal} veg={veg} setVeg={setVeg} fruit={fruit} setFruit={setFruit} grain={grain} setGrain={setGrain} protein={protein} setProtein={setProtein} fat={fat} setFat={setFat} dairy={dairy} setDairy={setDairy} setDailyfood={setDailyfood} dailyfood={dailyfood}></DailyIntake>
  </div>
);



  return (
    <div className="App">
     <BrowserRouter>
       <Nav/>
        <Routes>
        <Route path="/" element={Home()}/>
        <Route path="/new" element={<NewForm />}></Route>
        <Route path="/data" element={<Data monCalTotal={monCalTotal} tuesCalTotal={tuesCalTotal} wedCalTotal={wedCalTotal} thursCalTotal={thursCalTotal} friCalTotal={friCalTotal} satCalTotal={satCalTotal} sunCalTotal={sunCalTotal} veg={veg} dairy={dairy} fat={fat} protein={protein} grain={grain} fruit={fruit} calTotal={calTotal} />}></Route>
        </Routes>
       </BrowserRouter> 
    </div>
  );
}

export default App;
