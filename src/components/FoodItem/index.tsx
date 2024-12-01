import { foodItem } from "@/types/nutri";
import { Food, FoodDescription, FoodItemContainer, FoodName } from "./styles";

import { FaChevronRight } from "react-icons/fa";
import { useContext } from "react";
import { NutriContext } from "@/contexts/nutriContext";
import { api } from "@/utils/axios";


interface FoodProps{
    food:foodItem
}
const FoodItem = ({food}:FoodProps) =>{

    const {
        set_detail_food,
        food_id,
    } = useContext(NutriContext)

    const {id} = food
    
    const get_details = async () =>{

        console.log(food_id)

        try {
            const response = await api.get(`/get-food/${id}`)

            const {data} = response


            set_detail_food({
                food_name:data.food_name,
                food_type:data.food_type,
                food_url:data.food_url,
                id:data.food_id,
                food_images:new Array(data.food_images.food_image),
                serving:Array.isArray(data.servings.serving) ? data.servings.serving 
                : new Array(data.servings.serving),
                food_sub_category:data.food_sub_categories.food_sub_category
            })

            
        } catch (error) {
            console.log(error)
            alert("Erro ao obter dados detalhados")
        }
        


    }



    
    return (
        <FoodItemContainer onClick={get_details}>

            <Food>
                <FoodName>
                    <span>{food.food_name}</span>

                   
                </FoodName>

                <FoodDescription>
                    <span>
                        food description
                    </span>
                </FoodDescription>
            </Food>
                
            
            <FaChevronRight color="$green600" size={20}/>


        </FoodItemContainer>
    )
}

export default FoodItem