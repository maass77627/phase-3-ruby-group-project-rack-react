import React from "react";
import Food from "./Food";
import FoodFilter from "./FoodFilter";

function FoodContainer({ foods, setDailyfood, dailyfood, setFoods }) {
        console.log(foods)



    return(
        <div id="fcontainer">
            <FoodFilter foods={foods} setFoods={setFoods}></FoodFilter>
            {foods.map((food) => <Food dailyfood={dailyfood} setDailyfood={setDailyfood} food={food} foods={foods} setFoods={setFoods}  key={food.id}></Food>)}

        </div>
    )
}

export default FoodContainer