
import React from "react";
import { useState } from "react";

function Food({food, setDailyfood, dailyfood}) {

    // const [dailyfood, setDailyfood] = useState()
    const [toggle, setToggle] = useState(false)

    console.log(food)

    function handleClick() {
        setToggle(!toggle)
         console.log(dailyfood.length)
         if (dailyfood.length < 8) {
        setDailyfood([...dailyfood, food])
         } else{
       console.log(dailyfood)
        }
    
    }

    function handleDelete() {
        console.log(food)
        let id = food.id
        console.log(id)
        fetch(`http://localhost:9292/foods/${id}`, {
            method: "DELETE"
        })
    }



    return(
        <div onClick={handleClick} id="food">
            <h3>{food.name.toUpperCase()}</h3>
            {/* <h4>{food.category}</h4> */}
            <img id="foodimg" src={food.image} alt="banana"/>
            {/* <p>{food.description}</p> */}
            <p>{food.calories}</p>
            {toggle ? <button onClick={handleDelete}>Delete</button> : null}
        </div>
    )
}

export default Food