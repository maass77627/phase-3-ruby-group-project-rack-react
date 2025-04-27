import React from "react";
import { useState } from "react";

function FoodTwo({food, setDailyfood, dailyfood}) {

   const [toggle, setToggle] = useState(false)
    

console.log(food)

function handleDelete(e) {
  
 let newfood = dailyfood.filter((foody) => foody.id !== food.id)
 setDailyfood(newfood)
 console.log(newfood)
    
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
         { toggle ?  <button onClick={(e) => handleDelete(e)} >delete</button> : null}
        </div>
    )
}

export default FoodTwo