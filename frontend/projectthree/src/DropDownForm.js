import React from "react";
import { useState } from "react";

function DropDownForm({ dailyfood, calTotal, setMondayCalTotal, setTuesdayCalTotal, setWednesdayCalTotal, setThursdayCalTotal, setFridayCalTotal, setSaturdayCalTotal, setSundayCalTotal }) {

    console.log(dailyfood)
    console.log(calTotal)

    const [weekday, setWeekDay] = useState([])

    function handleSubmit(e) {
        console.log(e)
        e.preventDefault()
        if (weekday === "Monday") {
            setMondayCalTotal(calTotal)
        }
        else if (weekday === "Tuesday") {
            setTuesdayCalTotal(calTotal)
        }
        else if (weekday === "Wednesday") {
            setWednesdayCalTotal(calTotal)
        }
        else if (weekday === "Thursday") {
            setThursdayCalTotal(calTotal)
        }
        else if (weekday === "Friday") {
            setFridayCalTotal(calTotal)
        }
        else if (weekday === "Saturday") {
            setSaturdayCalTotal(calTotal)
        }
        else if (weekday === "Sunday") {
            setSundayCalTotal(calTotal)
        }
        // console.log(friCalTotal)
        
    }

   function handleChange(e) {
    console.log(e.target.value)
    setWeekDay(e.target.value)

   }

    return(
        <form id="inputform" onSubmit={handleSubmit}>
        <select  onChange={handleChange}>
        <option value="Monday">Monday</option>
        <option value="Tuesday">Tuesday</option>
        <option value="Wednesday">Wednesday</option>
        <option value="Thursday">Thursday</option>
        <option value="Friday">Friday</option>
        <option value="Saturday">Saturday</option>
        <option value="Sunday">Sunday</option>
      </select>
      <button type="submit">Submit</button>
      
        </form>
    )
}

export default DropDownForm