import React from 'react'
import {Link} from 'react-router-dom'

function SingleItem({food}) {
  return (
    <Link to ={`/Meal/${food.idMeal}`} className = "w-[233.5px]" style ={{boxShadow :"0 2px 8px 0 rgba(99,99,99,.09)"}}>
        <div className = "">
        <img src={food.strMealThumb} alt="" />
        </div>
        <div className = "pt-3 px-[6px] pb-[6px]">
            <div>{food.strMeal}</div>
        </div>
    </Link>
  )
}

export default SingleItem
