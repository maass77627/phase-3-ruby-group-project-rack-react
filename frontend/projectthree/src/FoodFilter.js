import React from "react";

function FoodFilter() {


    function handleChange(e) {
        console.log(e.target)
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(e)

    }


    return(
        <form onSubmit={handleSubmit} id="form">
            <input onChange={handleChange} type="text" value="food"></input>
            <input type="submit" value="submit" id="submit"></input>
        </form>
    )
}

export default FoodFilter