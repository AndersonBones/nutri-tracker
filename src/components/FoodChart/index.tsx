import { Doughnut } from "react-chartjs-2"
import { FoodChart, FoodChartContainer, FoodChartLegend, FoodLegendCircle, FoodLegendData, FoodLegendItem } from "./styles"
import {Chart as ChartJS, ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend} from 'chart.js'
import { useContext } from "react"
import { NutriContext } from "@/contexts/nutriContext"

ChartJS.register(
    CategoryScale, LinearScale, 
    PointElement, LineElement, 
    Title, Tooltip,
    Legend, ArcElement
)




const FoodChartComponent = ()=>{

    const {
        serving:{
            fat,
            carbohydrate,
            protein
        },

        nutritionFacts:{
            carbohydratePercent,
            fatPercent,
            proteinPercent
        }
    } = useContext(NutriContext)

    const pieChartData = {
        labels: ["Carboidrato", "Proteína", "Gordura"],
        datasets:[
            {
                label:"Percent",
                data:[Number(carbohydrate), Number(protein), Number(fat)],
                backgroundColor:[
                    "#4BB89A",
                    "#F9C54B",
                    "#F58881"
                ],
                hoverOffset:4,
            },
        ],
    }

    return (
        <FoodChartContainer>

            <FoodChart>

                <Doughnut  
                    
                    options={{
                        
                    plugins:{
                        legend:{
                            position:"bottom",
                                align:"center",
                                labels:{
                                    usePointStyle:true,
                                    
                                },
                                display:false
                        },
                    },
                            
                }} data={pieChartData}/>
                    
            </FoodChart>

            

            <FoodChartLegend>
                <FoodLegendItem>
                    <FoodLegendCircle style={{backgroundColor:"#F58881"}} />

                    <FoodLegendData>
                        <span>{fatPercent}% fat: <strong>{fat}g</strong></span>
                    </FoodLegendData>
                </FoodLegendItem>

                <FoodLegendItem>
                    <FoodLegendCircle style={{backgroundColor:"#4BB89A"}} />

                    <FoodLegendData>
                        <span>{carbohydratePercent}% carbs: <strong>{carbohydrate}g</strong></span>
                    </FoodLegendData>
                </FoodLegendItem>

                <FoodLegendItem>
                    <FoodLegendCircle style={{backgroundColor:"#F9C54B"}} />

                    <FoodLegendData>
                        <span>{proteinPercent}% protein: <strong>{protein}g</strong></span>
                    </FoodLegendData>
                </FoodLegendItem>

                
            </FoodChartLegend>


        </FoodChartContainer>
    )
}


export default FoodChartComponent