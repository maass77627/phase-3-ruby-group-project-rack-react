import React from "react";
import Food from "./Food";
import FoodFilter from "./FoodFilter";

function FoodContainer({ foods, setDairy, setGrain, setFat, setDailyfood, dailyfood, setFoods, calTotal, setCalTotal, veg, protein, fruit, setVeg, setProtein, setFruit }) {
        console.log(foods)



    return(
        <div id="fcontainer">
            <h1>Search Food</h1>
            <FoodFilter foods={foods} setFoods={setFoods}></FoodFilter>
            {foods.map((food) => <Food setDairy={setDairy} setGrain={setGrain} setFat={setFat} setVeg={setVeg} setProtein={setProtein} setFruit={setFruit} veg={veg} protein={protein} fruit={fruit} calTotal={calTotal} setCalTotal={setCalTotal} dailyfood={dailyfood} setDailyfood={setDailyfood} food={food} foods={foods} setFoods={setFoods}  key={food.id}></Food>)}

        </div>
    )
}

export default FoodContainer