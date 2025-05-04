
import React from "react";
import { useState } from "react";

function Food({ setDairy, setGrain, setFat, dairy, grain, fat, food, setDailyfood, dailyfood, foods, setFoods, calTotal, setCalTotal, veg, protein, fruit, setVeg, setProtein, setFruit}) {

    const [toggle, setToggle] = useState(false)
    // const [calTotal, setCalTotal] = useState(0)

    console.log(food)

    function handleClick() {
        setToggle(!toggle)
         console.log(dailyfood.length)
         if (dailyfood.length < 10) {
        setDailyfood([...dailyfood, food])
        setCalTotal(calTotal + food.calories)
             
        switch(food.category) {
            case 'vegetable':
                setVeg(veg + 10)
             console.log(veg);
             break
             case 'fruit':
                setFruit(fruit + 10)
                console.log(fruit);
                break
                case 'protein':
                    setProtein(protein + 10)
                    console.log(protein);
                    break
                    case 'dairy':
                setDairy(dairy + 10)
                console.log(dairy);
                break
                case 'grain':
                    setGrain(grain + 10)
                    console.log(grain);
                    break
                    case 'fat':
                    setFat(fat + 10)
                    console.log(fat);
                    break
            default:
              return 'foo';
            //   break
          }

        console.log(calTotal)
         } else{
       console.log(dailyfood)
        }
    
    }

    function handleDelete() {
        console.log(food)
        let id = food.id
        setCalTotal(calTotal - food.calories)
        console.log(calTotal)
        console.log(id)
        fetch(`http://localhost:9292/foods/${id}`, {
            method: "DELETE"
        })
        let newfood = foods.filter((foody) => foody.id !== food.id)
        setFoods(newfood)
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