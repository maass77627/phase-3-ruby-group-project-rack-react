
import React from "react";
import { useState } from "react";

function Food({ setDairy, setGrain, setFat, dairy, grain, fat, food, setDailyfood, dailyfood, foods, setFoods, calTotal, setCalTotal, veg, protein, fruit, setVeg, setProtein, setFruit}) {

    const [toggle, setToggle] = useState(false)
   
    
    function handleClick() {
            setToggle(!toggle)
         if (dailyfood.length < 10 && !dailyfood.includes(food) ) {
             setDailyfood([...dailyfood, food])
             setCalTotal(calTotal + food.calories)
             
        switch(food.category) {
            case 'vegetable':
                setVeg(veg + 10)
             break
             case 'fruit':
                setFruit(fruit + 10)

                break
                case 'protein':
                    setProtein(protein + 10)
                    break
                    case 'dairy':
                setDairy(dairy + 10)
                break
                case 'grain':
                    setGrain(grain + 10)
                    break
                    case 'fat':
                    setFat(fat + 10)
                    break
            default:
              return 'foo';
          }

        console.log(calTotal)
         } else{
       console.log(dailyfood)
        }
    
    }

    function handleDelete() {
        let id = food.id
        setCalTotal(calTotal - food.calories)
        fetch(`http://localhost:9292/foods/${id}`, {
            method: "DELETE"
        })
        let newfood = foods.filter((foody) => foody.id !== food.id)
        setFoods(newfood)
    }



    return(
        <div onClick={handleClick} id="food">
            <h3>{food.name.toUpperCase()}</h3>
            <img id="foodimg" src={food.image} alt="banana"/>
            <p>{food.calories}</p>
            {toggle ? <button onClick={handleDelete}>Delete</button> : null}
        </div>
    )
}

export default Food