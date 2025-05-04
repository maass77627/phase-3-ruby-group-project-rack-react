import React from "react";
import { useState } from "react";

function FoodTwo({calTotal, setCalTotal, food, setDailyfood, dailyfood, fat, setFat, protein, setProtein, dairy, setDairy, fruit, setFruit, veg, setVeg, grain, setGrain}) {

   const [toggle, setToggle] = useState(false)
    

console.log(food)

function handleDelete(e) {
  
 let newfood = dailyfood.filter((foody) => foody.id !== food.id)
 setDailyfood(newfood)
 console.log(newfood)
setCalTotal(calTotal - food.calories)

 switch(food.category) {
    case 'vegetable':
        setVeg(veg - 10)
     console.log(veg);
     break
     case 'fruit':
        setFruit(fruit - 10)
        console.log(fruit);
        break
        case 'protein':
            setProtein(protein - 10)
            console.log(protein);
            break
            case 'dairy':
        setDairy(dairy - 10)
        console.log(dairy);
        break
        case 'grain':
            setGrain(grain - 10)
            console.log(grain);
            break
            case 'fat':
            setFat(fat - 10)
            console.log(fat);
            break
    default:
      return 'foo';
    //   break
  }
    
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