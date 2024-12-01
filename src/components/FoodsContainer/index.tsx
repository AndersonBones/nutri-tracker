import { useContext, useEffect } from "react";
import FoodItem from "../FoodItem";
import { FoodContainer, FoodDescription, FoodDetailContainer, FoodDetailImage, Foods } from "./styles";
import { NutriContext } from "@/contexts/nutriContext";

import NutritionFacts from "../nutritionFacts";
import DropdownServing from "../DropdownServing";
import FoodChartComponent from "../FoodChart";




const FoodsComponent = ()=>{


    const {
        foods, 
        food_id,
        food_detail:{
            food_name,
            food_type,
            food_url,
            id,
            serving,
            food_images
        },

        nutritionFacts:{
            carbohydratePercent,
            fatPercent,
            proteinPercent
        }
    } = useContext(NutriContext)



    const filter_food = foods.filter(item=>item.id == food_id)[0]


    return (
        <Foods>

            <FoodContainer>
                {
                    foods.map((food, index)=>{
                        return (
                            <FoodItem key={index} food={food} />
                        )
                    })
                }
            </FoodContainer>

            <FoodDetailContainer>
                <h3>{food_name}</h3>

                <FoodDetailImage>
                    <img src="https://www.foodimagedb.com/food-images/4c35a286-b455-459f-a247-be19f57ee548_1024x1024.png" alt="" />
                </FoodDetailImage>

               
                
                <DropdownServing servingList={serving}/>

                

                <FoodChartComponent />


                <FoodDescription>
                    
                    <p>
                        There are 57 calories in 1 pequeno Ovo Cozido 
                    </p>

                    <p>
                        Calorie breakdown: {fatPercent}% fat, {carbohydratePercent}% carbs, {proteinPercent}% protein
                    </p>

                </FoodDescription>

                {/* <FoodNutritionClaims>

                </FoodNutritionClaims> */}


                <NutritionFacts/>


            </FoodDetailContainer>
            
            
        
        </Foods>
    )
}

export default FoodsComponent