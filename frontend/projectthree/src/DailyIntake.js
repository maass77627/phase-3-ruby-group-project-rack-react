import React from "react";
import Food from "./Food";

function DailyIntake({ dailyfood }) {
    console.log(dailyfood)

return(
    <div id="intake">
        <h1>Daily Food</h1>
        {dailyfood ? dailyfood.map((food) => <Food food={food}></Food>) : null}

    </div>
)

}

export default DailyIntake