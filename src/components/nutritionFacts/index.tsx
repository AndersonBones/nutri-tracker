import { CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody, CTableDataCell } from "@coreui/react"
import { NutritionFactsContainer, NutritionFactsTable, NutritionBody, NutritionRowTotal, NutritionRowSubtotal, NutritionDataSubtotal, NutritionLabelTotal, NutritionDataTotal, NutritionLabelSubtotal, NutritionTitle, NutritionServing, NutritionCalories, NutritionRowSubtotalData, NutritionRowTotalHeader } from "./styles"



const NutritionFacts = () =>{

    return (
        
        <NutritionFactsContainer>
            <NutritionTitle>
                <h2><strong>Tabela nutricional</strong></h2>
            </NutritionTitle>

            <NutritionServing>
                <span>Serving Size</span>
                <strong>1 grande</strong>
            </NutritionServing>

            <NutritionCalories>
                <span>Calorias</span>
                <strong>77</strong>
            </NutritionCalories>
            

            
            <NutritionFactsTable>


                <NutritionBody>

                    <NutritionRowTotal>
                        <NutritionRowTotalHeader>
                            
                            <NutritionLabelTotal>Total Fat 5.28g</NutritionLabelTotal>
                            <NutritionDataTotal>7%</NutritionDataTotal>
                            
                        </NutritionRowTotalHeader>

                        <NutritionRowSubtotal>

                            <NutritionRowSubtotalData>
                                <NutritionLabelSubtotal>Saturated Fat 1.627 g</NutritionLabelSubtotal>
                                <NutritionDataSubtotal>8%</NutritionDataSubtotal>
                            </NutritionRowSubtotalData>

                            <NutritionRowSubtotalData>
                                <NutritionLabelSubtotal>Trans Fat</NutritionLabelSubtotal>
                                <NutritionDataSubtotal></NutritionDataSubtotal>
                            </NutritionRowSubtotalData>

                            <NutritionRowSubtotalData>
                                <NutritionLabelSubtotal>Polyunsaturated Fat 0.704g</NutritionLabelSubtotal>
                                <NutritionDataSubtotal></NutritionDataSubtotal>
                            </NutritionRowSubtotalData>

                            <NutritionRowSubtotalData>
                                <NutritionLabelSubtotal>Monounsaturated Fat 2.030g</NutritionLabelSubtotal>
                                <NutritionDataSubtotal></NutritionDataSubtotal>
                            </NutritionRowSubtotalData>
                           
                        </NutritionRowSubtotal>



                    </NutritionRowTotal>

                    <NutritionRowTotal>
                        <NutritionRowTotalHeader>

                            <NutritionLabelTotal>Cholesterol 211mg</NutritionLabelTotal>
                            <NutritionDataTotal>70%</NutritionDataTotal>
                            
                        </NutritionRowTotalHeader>

                    </NutritionRowTotal>

                    <NutritionRowTotal>
                        <NutritionRowTotalHeader>

                            <NutritionLabelTotal>Sodium 139 mg</NutritionLabelTotal>
                            <NutritionDataTotal>6%</NutritionDataTotal>
                            
                        </NutritionRowTotalHeader>

                    </NutritionRowTotal>

                    <NutritionRowTotal>
                        <NutritionRowTotalHeader>

                            <NutritionLabelTotal>Total Carbohydrate 0.56g</NutritionLabelTotal>
                            <NutritionDataTotal>0%</NutritionDataTotal>
                            
                        </NutritionRowTotalHeader>

                        <NutritionRowSubtotal>
                            <NutritionRowSubtotalData>

                                <NutritionLabelSubtotal>Dietary Fiber 0g</NutritionLabelSubtotal>
                                <NutritionDataSubtotal>0%</NutritionDataSubtotal>
                            
                            </NutritionRowSubtotalData>

                            <NutritionRowSubtotalData>
                                <NutritionLabelSubtotal>Sugars 0.56g</NutritionLabelSubtotal>
                                <NutritionDataSubtotal></NutritionDataSubtotal>
                            </NutritionRowSubtotalData>
                            
                        </NutritionRowSubtotal>


                    </NutritionRowTotal>


                    <NutritionRowTotal>
                        <NutritionRowTotalHeader>
                            <NutritionLabelTotal>Protein 6.26g</NutritionLabelTotal>
                            <NutritionDataTotal></NutritionDataTotal>
                        </NutritionRowTotalHeader>

                    </NutritionRowTotal>


                    <NutritionRowTotal>
                        <NutritionRowTotalHeader style={{
                            display:"flex",
                            flexDirection:"column"
                        }}>

                            
                            <NutritionRowSubtotalData>
                                <NutritionLabelTotal>Cholesterol 211mg</NutritionLabelTotal>
                                <NutritionDataTotal>70%</NutritionDataTotal>
                            </NutritionRowSubtotalData>

                            <NutritionRowSubtotalData>
                                <NutritionLabelSubtotal>Vitamin D -</NutritionLabelSubtotal>
                                <NutritionDataSubtotal></NutritionDataSubtotal>
                            </NutritionRowSubtotalData>

                            <NutritionRowSubtotalData>
                                <NutritionLabelSubtotal>Calcium 25 mg</NutritionLabelSubtotal>
                                <NutritionDataSubtotal>2%</NutritionDataSubtotal>
                            </NutritionRowSubtotalData>

                            <NutritionRowSubtotalData>
                                <NutritionLabelSubtotal>Iron 0.60 mg</NutritionLabelSubtotal>
                                <NutritionDataSubtotal>3%</NutritionDataSubtotal>
                            </NutritionRowSubtotalData>

                            <NutritionRowSubtotalData>
                                <NutritionLabelSubtotal>Potassium 63 mg</NutritionLabelSubtotal>
                                <NutritionDataSubtotal>1%</NutritionDataSubtotal>
                            </NutritionRowSubtotalData>

                            <NutritionRowSubtotalData>
                                <NutritionLabelSubtotal>Vitamin A 84mcg</NutritionLabelSubtotal>
                                <NutritionDataSubtotal>9%</NutritionDataSubtotal>
                            </NutritionRowSubtotalData>

                            <NutritionRowSubtotalData>
                                <NutritionLabelSubtotal>Vitamin C 0mg</NutritionLabelSubtotal>
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