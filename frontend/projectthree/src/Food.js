
import React from "react";
// import { useState } from "react";

function Food({food, setDailyfood, dailyfood}) {

    // const [dailyfood, setDailyfood] = useState()

console.log(food)

function handleClick() {
    console.log(food)
    setDailyfood([...dailyfood, food])
    console.log(dailyfood)
}



    return(
        <div onClick={handleClick} id="food">
            <h3>{food.name.toUpperCase()}</h3>
            {/* <h4>{food.category}</h4> */}
            <img id="foodimg" src={food.image} alt="banana"/>
            {/* <p>{food.description}</p> */}
            <p>{food.calories}</p>
            
        </div>
    )
}

export default Food