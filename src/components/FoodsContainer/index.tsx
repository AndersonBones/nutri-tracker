import { useContext } from "react";
import FoodItem from "../FoodItem";
import { FoodChart, FoodContainer, FoodDescription, FoodDetailContainer, FoodDetailImage, FoodNutritionClaims, FoodNutritionFacts, Foods, FoodServings } from "./styles";
import { NutriContext } from "@/contexts/nutriContext";
import DropdownComponent from "../dropdown";
import { Doughnut } from "react-chartjs-2";
import {Chart as ChartJS, ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend} from 'chart.js'
import NutritionFacts from "../nutritionFacts";



ChartJS.register(
    CategoryScale, LinearScale, 
    PointElement, LineElement, 
    Title, Tooltip,
    Legend, ArcElement
)

const FoodsComponent = ()=>{


    const {foods, food_detail:{
        food_name,
        food_type,
        food_url,
        id,
        servings
    }} = useContext(NutriContext)



    const pieChartData = {
        labels: ["Carboidrato", "Proteina", "Gordura"],
        datasets:[
            {
                label:"Time Spent",
                data:[25, 25, 50],
                backgroundColor:[
                    "#75C3DA",
                    "#F9C54B",
                    "#F58881"
                ],
                hoverOffset:4,
            },
        ],
    }
    



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
                <h3>Ovo Cozido</h3>

                <FoodDetailImage>
                    <img src="https://www.foodimagedb.com/food-images/4c35a286-b455-459f-a247-be19f57ee548_1024x1024.png" alt="" />

                </FoodDetailImage>

               
                <FoodServings>
                    <DropdownComponent/>

                </FoodServings>

                <FoodChart>

                    <Doughnut  options={{
                    
                        plugins:{
                            
                           
                            
                            legend:{
                                position:"bottom",
                                align:"center",
                                labels:{
                                    usePointStyle:true,
                                
                                },

                                
                                
                                display:true
                            },

                        
                        
                           
                        },

                        
                    }} data={pieChartData}/>

                </FoodChart>


                <FoodDescription>

                    <p>
                        There are 57 calories in 1 pequeno Ovo Cozido

                        Calorie breakdown: 64% fat, 3% carbs, 33% protein
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