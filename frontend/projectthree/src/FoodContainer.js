import React from "react";
import Food from "./Food";
import FoodFilter from "./FoodFilter";

function FoodContainer({ foods, setDailyfood, dailyfood }) {
        console.log(foods)



    return(
        <div id="fcontainer">
            <FoodFilter></FoodFilter>
            {foods.map((food) => <Food dailyfood={dailyfood} setDailyfood={setDailyfood} food={food}  key={food.id}></Food>)}

        </div>
    )
}

export default FoodContainer