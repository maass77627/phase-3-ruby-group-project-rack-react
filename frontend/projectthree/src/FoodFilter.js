import React from "react";
import { useState } from 'react';

function FoodFilter({ foods, setFoods}) {
const [foodinput, setFoodInput] = useState("")

    function handleChange(e) {
        setFoodInput(e.target.value)
        console.log(foodinput)
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(e)
        
        let newfoods = foods.filter((food) => food.name === foodinput)
            console.log(newfoods)
            setFoods(newfoods)

    }


    return(
        <form onSubmit={handleSubmit} id="form2">
            <input onChange={handleChange} type="text" value={foodinput}></input>
            <input type="submit" value="submit" id="submit"></input>
        </form>
    )
}

export default FoodFilter