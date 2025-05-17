
import React from "react";
import { useState } from "react";


function NewForm() {

    const [formData, setFormData] = useState({
        name: "banana",
        description: "yellow",
        category: "fruit",
        calories: 30,
        image: "banana4.png",
    })

    function handleNameChange(e) {
        setFormData({
            ...formData, 
           name: e.target.value
        })

    }
    function handleDescriptionChange(e) {
        setFormData({
            ...formData, 
           description: e.target.value
        })
        
    }
    function handleCategoryChange(e) {
        setFormData({
            ...formData, 
           category: e.target.value
        })
    }
    function handleCaloriesChange(e) {
        setFormData({
            ...formData, 
           calories: e.target.value
        })
    }

    function handleImageChange(e) {
        setFormData({
            ...formData, 
           image: e.target.value
        })
    }


        function handleSubmit(e) {
            e.preventDefault()
            fetch("http://localhost:9292/foods", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                  }, 
                  body: JSON.stringify(formData)
            })
            .then((response) => response.json())
            .then((json) => {
               
             console.log(json)})
            }

    return(
        <div id="newform">
            <form onSubmit={handleSubmit} id="form">
            <label id="label">Name</label>
                <input onChange={handleNameChange} type="text" value={formData.name}></input>
                <label id="label">Description</label>
                <input onChange={handleDescriptionChange} type="text" value={formData.description}></input>
                <label id="label">Category</label>
                <input onChange={handleCategoryChange} type="text" value={formData.category} ></input>
                <label id="label">Calories</label>
                <input onChange={handleCaloriesChange} type="text" value={formData.calories}></input>
                <label id="label">Image</label>
                <input onChange={handleImageChange} type="text" value={formData.image}></input>
                <input type="submit" value="submit"></input>
            </form>

        </div>
    )
}

export default NewForm