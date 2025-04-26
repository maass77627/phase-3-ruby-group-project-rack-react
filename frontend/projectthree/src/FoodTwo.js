import React from "react";
import { useState } from "react";

function FoodTwo({food}) {

   const [toggle, setToggle] = useState(false)
    

console.log(food)

function handleDelete(e) {
    console.log("delete")
    console.log(e.target)
}

function handleClick(e) {
    console.log(e.target)
   setToggle(!toggle)
}



    return(
        <div onClick={handleClick} id="food">
            <h3>{food.name.toUpperCase()}</h3>
          
            <img id="foodimg" src={food.image} alt="banana"/>
            
            <p>{food.calories}</p>
         { toggle ?  <button onClick={handleDelete} >delete</button> : null}
        </div>
    )
}

export default FoodTwo