import React from "react";
import { useState } from "react";
// import { v4 as uuidv4 } from 'uuid'

function FoodTwo({ calTotal, setCalTotal, food, setDailyfood, dailyfood, fat, setFat, protein, setProtein, dairy, setDairy, fruit, setFruit, veg, setVeg, grain, setGrain}) {

   const [toggle, setToggle] = useState(false)
    
console.log(food.key)


function handleDelete(e) {
   

    // const index = dailyfood.indexOf(food);
    // console.log(index)
    // if (index !== -1) {
    //   const newItems = [...dailyfood];
    //   newItems.splice(index, 1);
    //   setDailyfood(newItems);
    // }

   

    console.log(food)
    console.log(food.key)
  let newfood = dailyfood.filter((foody) => foody.id !== food.id)
    setDailyfood(newfood)
   setCalTotal(calTotal - food.calories)

 switch(food.category) {
    case 'vegetable':
        setVeg(veg - 10)
     break
     case 'fruit':
        setFruit(fruit - 10)
        break
        case 'protein':
            setProtein(protein - 10)
            break
            case 'dairy':
        setDairy(dairy - 10)
        break
        case 'grain':
            setGrain(grain - 10)
            break
            case 'fat':
            setFat(fat - 10)
            break
    default:
      return 'foo';
  }
    
}

function handleClick(e) {
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