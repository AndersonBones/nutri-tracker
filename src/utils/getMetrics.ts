import { NutritionMetrics } from "@/types/nutri"



export const getMetrics = (protein:number, carbohydrate:number, fat:number): NutritionMetrics =>{
    
    try {

        const nutritionTotal = Number((protein + carbohydrate + fat).toFixed(2))

        

        return {
            proteinPercent:Number(((protein / nutritionTotal) * 100).toFixed(2)),
            carbohydratePercent: Number(((carbohydrate / nutritionTotal) * 100).toFixed(2)),
            fatPercent:Number(((fat / nutritionTotal) * 100).toFixed(2))
        }
    } catch (error) {
        return {
            proteinPercent:0,
            carbohydratePercent: 0,
            fatPercent:0
        }
    }

}