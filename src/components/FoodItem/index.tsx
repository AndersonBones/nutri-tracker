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

    const {set_detail_food} = useContext(NutriContext)
    const {id} = food
    
    const get_details = async () =>{
        try {
            const response = await api.get(`/get-food/${id}`)

            const {data} = response

            set_detail_food(data)

            
        } catch (error) {
            alert("Erro ao obter dados detalhados")
        }
        


    }



    
    return (
        <FoodItemContainer onClick={get_details}>

            <Food>
                <FoodName>
                    <span>{food.name}</span>
                </FoodName>

                <FoodDescription>
                    <span>
                        {food.description}
                    </span>
                </FoodDescription>
            </Food>
                
            
            <FaChevronRight color="$green600" size={20}/>


        </FoodItemContainer>
    )
}

export default FoodItem