import React from "react";
import FoodTwo from "./FoodTwo";

function DailyIntake({ dailyfood, setDailyfood }) {
    console.log(dailyfood)

return(
    <div id="intake">
        <h1>Daily Food</h1>
        {dailyfood ? dailyfood.map((food) => <FoodTwo dailyfood={dailyfood} setDailyfood={setDailyfood} key={food.id} food={food}></FoodTwo>) : null}
    </div>
)

}

export default DailyIntake