import { useContext } from "react"
import { NutritionFactsContainer, NutritionFactsTable, NutritionBody, NutritionRowTotal, NutritionRowSubtotal, NutritionDataSubtotal, NutritionLabelTotal, NutritionDataTotal, NutritionLabelSubtotal, NutritionTitle, NutritionServing, NutritionCalories, NutritionRowSubtotalData, NutritionRowTotalHeader } from "./styles"
import { NutriContext } from "@/contexts/nutriContext"




const NutritionFacts = () =>{

    
    const {serving:{
        calcium,
        calories,
        carbohydrate,
        cholasterol,
        fat,
        fiber,
        iron,
        measurement_description,
        metric_serving_amount,
        metric_serving_unit,
        monounsaturated_fat,
        number_of_units,
        polyunsaturated_fat,
        potassium,
        protein,
        saturated_fat,
        serving_description,
        serving_id,
        serving_url,
        sodium,
        sugar,
        vitamin_a,
        vitamin_c
    }} = useContext(NutriContext)
    
   



    return (
        
        <NutritionFactsContainer>
            <NutritionTitle>
                <h2><strong>Nutrition Facts</strong></h2>
            </NutritionTitle>

            <NutritionServing>
                <span>Serving Size</span>
                <strong>{serving_description}</strong>
            </NutritionServing>

            <NutritionCalories>
                <span>Calories</span>
                <strong>{calories}</strong>
            </NutritionCalories>
            

            
            <NutritionFactsTable>


                <NutritionBody>

                    <NutritionRowTotal>
                        <NutritionRowTotalHeader>
                            
                            <NutritionLabelTotal>Total Fat {fat}g</NutritionLabelTotal>
                            <NutritionDataTotal>7%</NutritionDataTotal>
                            
                        </NutritionRowTotalHeader>

                        <NutritionRowSubtotal>

                            <NutritionRowSubtotalData>
                                <NutritionLabelSubtotal>Saturated Fat {saturated_fat}g</NutritionLabelSubtotal>
                                <NutritionDataSubtotal>8%</NutritionDataSubtotal>
                            </NutritionRowSubtotalData>

                            <NutritionRowSubtotalData>
                                <NutritionLabelSubtotal>Trans Fat </NutritionLabelSubtotal>
                                <NutritionDataSubtotal></NutritionDataSubtotal>
                            </NutritionRowSubtotalData>

                            <NutritionRowSubtotalData>
                                <NutritionLabelSubtotal>Polyunsaturated Fat {polyunsaturated_fat}g</NutritionLabelSubtotal>
                                <NutritionDataSubtotal></NutritionDataSubtotal>
                            </NutritionRowSubtotalData>

                            <NutritionRowSubtotalData>
                                <NutritionLabelSubtotal>Monounsaturated Fat {monounsaturated_fat}g</NutritionLabelSubtotal>
                                <NutritionDataSubtotal></NutritionDataSubtotal>
                            </NutritionRowSubtotalData>
                           
                        </NutritionRowSubtotal>



                    </NutritionRowTotal>

                    <NutritionRowTotal>
                        <NutritionRowTotalHeader>

                            <NutritionLabelTotal>Cholesterol {cholasterol} mg</NutritionLabelTotal>
                            <NutritionDataTotal>70%</NutritionDataTotal>
                            
                        </NutritionRowTotalHeader>

                    </NutritionRowTotal>

                    <NutritionRowTotal>
                        <NutritionRowTotalHeader>

                            <NutritionLabelTotal>Sodium {sodium} mg</NutritionLabelTotal>
                            <NutritionDataTotal>6%</NutritionDataTotal>
                            
                        </NutritionRowTotalHeader>

                    </NutritionRowTotal>

                    <NutritionRowTotal>
                        <NutritionRowTotalHeader>

                            <NutritionLabelTotal>Total Carbohydrate {carbohydrate}g</NutritionLabelTotal>
                            <NutritionDataTotal>0%</NutritionDataTotal>
                            
                        </NutritionRowTotalHeader>

                        <NutritionRowSubtotal>
                            <NutritionRowSubtotalData>

                                <NutritionLabelSubtotal>Dietary Fiber {fiber}g</NutritionLabelSubtotal>
                                <NutritionDataSubtotal>0%</NutritionDataSubtotal>
                            
                            </NutritionRowSubtotalData>

                            <NutritionRowSubtotalData>
                                <NutritionLabelSubtotal>Sugars {sugar}g</NutritionLabelSubtotal>
                                <NutritionDataSubtotal></NutritionDataSubtotal>
                            </NutritionRowSubtotalData>
                            
                        </NutritionRowSubtotal>


                    </NutritionRowTotal>


                    <NutritionRowTotal>
                        <NutritionRowTotalHeader>
                            <NutritionLabelTotal>Protein {protein}g</NutritionLabelTotal>
                            <NutritionDataTotal></NutritionDataTotal>
                        </NutritionRowTotalHeader>

                    </NutritionRowTotal>


                    <NutritionRowTotal>
                        <NutritionRowTotalHeader style={{
                            display:"flex",
                            flexDirection:"column"
                        }}>

                            
                            <NutritionRowSubtotalData>
                                <NutritionLabelTotal>Cholesterol {cholasterol} mg</NutritionLabelTotal>
                                <NutritionDataTotal>70%</NutritionDataTotal>
                            </NutritionRowSubtotalData>

                            <NutritionRowSubtotalData>
                                <NutritionLabelSubtotal>Vitamin D -</NutritionLabelSubtotal>
                                <NutritionDataSubtotal></NutritionDataSubtotal>
                            </NutritionRowSubtotalData>

                            <NutritionRowSubtotalData>
                                <NutritionLabelSubtotal>Calcium {calcium} mg</NutritionLabelSubtotal>
                                <NutritionDataSubtotal>2%</NutritionDataSubtotal>
                            </NutritionRowSubtotalData>

                            <NutritionRowSubtotalData>
                                <NutritionLabelSubtotal>Iron {iron} mg</NutritionLabelSubtotal>
                                <NutritionDataSubtotal>3%</NutritionDataSubtotal>
                            </NutritionRowSubtotalData>

                            <NutritionRowSubtotalData>
                                <NutritionLabelSubtotal>Potassium {potassium} mg</NutritionLabelSubtotal>
                                <NutritionDataSubtotal>1%</NutritionDataSubtotal>
                            </NutritionRowSubtotalData>

                            <NutritionRowSubtotalData>
                                <NutritionLabelSubtotal>Vitamin A {vitamin_a}mcg</NutritionLabelSubtotal>
                                <NutritionDataSubtotal>9%</NutritionDataSubtotal>
                            </NutritionRowSubtotalData>

                            <NutritionRowSubtotalData>
                                <NutritionLabelSubtotal>Vitamin C {vitamin_c} mg</NutritionLabelSubtotal>
                                <NutritionDataSubtotal>0%</NutritionDataSubtotal>
                            </NutritionRowSubtotalData>
                            
                        </NutritionRowTotalHeader>

                    </NutritionRowTotal>


                  


                </NutritionBody>
            </NutritionFactsTable>
            
        </NutritionFactsContainer>
    )
}


export default NutritionFacts