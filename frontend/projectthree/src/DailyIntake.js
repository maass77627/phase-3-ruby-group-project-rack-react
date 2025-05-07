import React from "react";
import FoodTwo from "./FoodTwo";
//  import { v4 as uuidv4 } from 'uuid';

function DailyIntake({ calTotal, setCalTotal, dailyfood, setDailyfood, veg, setVeg, protein, setProtein, grain, setGrain, fruit, setFruit, fat, setFat, dairy, setDairy}) {
    console.log(dailyfood)

return(
    <div id="intake">
        <h1>Daily Food</h1>
        {dailyfood ? dailyfood.map((food) => <FoodTwo  setCalTotal={setCalTotal} calTotal={calTotal} veg={veg} setVeg={setVeg} protein={protein} setProtein={setProtein} grain={grain} setGrain={setGrain} dairy={dairy} setDairy={setDairy} fat={fat} setFat={setFat} fruit={fruit} setFruit={setFruit} dailyfood={dailyfood} setDailyfood={setDailyfood} key={food.id} food={food}></FoodTwo>) : null}
    </div>
)

}

export default DailyIntake