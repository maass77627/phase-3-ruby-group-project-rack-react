import React from "react";

function FoodFilter() {


    function handleSubmit(e) {
        e.preventDefault()
        console.log(e)

    }


    return(
        <form onSubmit={handleSubmit} id="form">
            <input type="text" value="food"></input>
            <input type="submit" value="submit" id="submit"></input>
        </form>
    )
}

export default FoodFilter