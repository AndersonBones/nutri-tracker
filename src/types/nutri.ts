import React from "react"


export interface FoodDetailsInteface{
    id:string
    food_name:string
    food_type:string
    food_url:string
    servings:Servings[]

}   

interface Servings{
    calcium:number
    calories:number
    carbohydrate:number
    cholasterol:number
    fat:number
    fiber:number
    iron:number
    measurement_description:string
    metric_serving_amount:number
    metric_serving_unit:string
    monounsaturated_fat:number
    number_of_units:number
    polyunsaturated_fat:number
    potassium:number
    protein:number
    saturated_fat:number
    serving_description:string
    serving_id:string
    serving_url:string
    sodium:number
    sugar:number
    vitamin_a:number
    vitamin_c:number
}

interface Nutrition{
    calories:number
    carbohydrate:number
    fat:number
    protein:number
}
export interface foodItem{
    description:string,
    id:string
    name:string
    url:string
}


export interface NutriContextInterface{
    foods:foodItem[]
    food_detail:FoodDetailsInteface
    search_term: string
    set_detail_food:(food_detail:FoodDetailsInteface)=>void
    set_foods:(foods:foodItem[])=>void
    set_query:(search_term:string)=>void
}

export interface NutriContextProps{
    children:React.ReactNode
}

