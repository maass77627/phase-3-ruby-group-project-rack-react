import React from "react";
import Food from "./Food";
import FoodFilter from "./FoodFilter";

function FoodContainer({ foods, dairy, setDairy, setGrain, setFat, setDailyfood, dailyfood, setFoods, calTotal, setCalTotal, veg, protein, fruit, setVeg, setProtein, setFruit, grain, fat }) {
        console.log(foods)



    return(
        <div id="fcontainer">
            <h1>Search Food</h1>
            <FoodFilter foods={foods} setFoods={setFoods}></FoodFilter>
            {foods.map((food) => <Food setDairy={setDairy} setGrain={setGrain} setFat={setFat} setVeg={setVeg} setProtein={setProtein} fat={fat} setFruit={setFruit} veg={veg} protein={protein} fruit={fruit} calTotal={calTotal} setCalTotal={setCalTotal} dailyfood={dailyfood} setDailyfood={setDailyfood} food={food} foods={foods} setFoods={setFoods} dairy={dairy} grain={grain}  key={food.id}></Food>)}

        </div>
    )
}

export default FoodContainer