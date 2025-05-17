import React from "react";
import FoodTwo from "./FoodTwo";
import DropDownForm from "./DropDownForm";
//   import { v4 as uuidv4 } from 'uuid';

function DailyIntake({ calTotal, setCalTotal, dailyfood, setDailyfood, veg, setVeg, protein, setProtein, grain, setGrain, fruit, setFruit, fat, setFat, dairy, setDairy, setMondayCalTotal, setTuesdayCalTotal, setWednesdayCalTotal, setThursdayCalTotal, setFridayCalTotal, setSaturdayCalTotal, setSundayCalTotal}) {
    console.log(dailyfood)
    // console.log(uuidv4())

return(
    <div id="intake">
        <h1>Daily Food</h1>
        {dailyfood ? dailyfood.map((food) => <FoodTwo  setCalTotal={setCalTotal} calTotal={calTotal} veg={veg} setVeg={setVeg} protein={protein} setProtein={setProtein} grain={grain} setGrain={setGrain} dairy={dairy} setDairy={setDairy} fat={fat} setFat={setFat} fruit={fruit} setFruit={setFruit} dailyfood={dailyfood} setDailyfood={setDailyfood}  food={food}></FoodTwo>) : null}
    <DropDownForm dailyfood={dailyfood}  calTotal={calTotal} setMondayCalTotal={setMondayCalTotal} setTuesdayCalTotal={setTuesdayCalTotal} setWednesdayCalTotal={setWednesdayCalTotal} setThursdayCalTotal={setThursdayCalTotal} setFridayCalTotal={setFridayCalTotal} setSaturdayCalTotal={setSaturdayCalTotal} setSundayCalTotal={setSundayCalTotal}></DropDownForm>
    </div>
)

}

export default DailyIntake