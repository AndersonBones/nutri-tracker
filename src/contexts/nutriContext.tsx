import { FoodDetailsInteface, foodItem, NutriContextInterface, NutriContextProps, NutritionMetrics, Serving } from "@/types/nutri";
import { getMetrics } from "@/utils/getMetrics";
import React from "react";



type FoodState = {
    foods: foodItem[];
    food_id:string
    search_term:string
    food_detail:FoodDetailsInteface
    serving:Serving 
    nutritionFacts:NutritionMetrics
};

export const NutriContext = React.createContext({} as NutriContextInterface)

export class NutriContextProvider extends React.Component<NutriContextProps, FoodState>{

    

    constructor(props: NutriContextProps){
        super(props);

        this.state = {
            foods:[],
            search_term:"",
            food_detail:{
                food_name:"",
                food_type:"",
                food_url:"",
                id:"",
                serving:[],
                food_images:[],
                food_sub_category:[]
            },

            food_id:"",

            serving:{
                calcium:0,
                calories:0,
                carbohydrate:0,
                cholasterol:0,
                fat:0,
                fiber:0,
                iron:0,
                measurement_description:"",
                metric_serving_amount:0,
                metric_serving_unit:"",
                monounsaturated_fat:0,
                number_of_units:0,
                polyunsaturated_fat:0,
                potassium:0,
                protein:0,
                saturated_fat:0,
                serving_description:"",
                serving_id:"",
                serving_url:"",
                sodium:0,
                sugar:0,
                vitamin_a:0,
                vitamin_c:0,
            },

            nutritionFacts:{
                carbohydratePercent:0,
                fatPercent:0,
                proteinPercent:0
            }
        };

        this.set_foods = this.set_foods.bind(this)

        this.set_query = this.set_query.bind(this)

        this.set_detail_food = this.set_detail_food.bind(this)

        this.set_nutrition_facts = this.set_nutrition_facts.bind(this)


    }

    


    set_nutrition_facts(servings: Serving[], serving_id:string): void {
        
        
        const serving = servings.filter(item=>{
            return item.serving_id == serving_id 
        })


        const {fat, carbohydrate, protein} = serving[0]

        
        
        this.setState({
            serving:serving[0],

            nutritionFacts:getMetrics(Number(protein), Number(carbohydrate), Number(fat))
        })
        
    }


    set_foods(foods:foodItem[]): void {
        
        this.setState({
            foods
        })

        
    }

    set_detail_food(food_detail:FoodDetailsInteface){

    
        const {food_name, food_type, food_url, id, serving, food_images, food_sub_category} = food_detail


        this.setState({
            food_detail:{
                food_name,
                food_type,
                food_url,
                id,
                serving,
                food_images,
                food_sub_category,
            },

            food_id:id
        })

    }

    set_query(search_term:string){
        this.setState({
            search_term
        })
    }   

    render(): React.ReactNode {
        return (
            <NutriContext.Provider value={{
                food_detail:this.state.food_detail,
                foods:this.state.foods,
                serving:this.state.serving,
                search_term:this.state.search_term,
                nutritionFacts:this.state.nutritionFacts,
                food_id:this.state.food_id,
                set_nutrition_facts:this.set_nutrition_facts,
                set_detail_food:this.set_detail_food,
                set_foods:this.set_foods,
                set_query:this.set_query,
                
            }}>
                {this.props.children}
            </NutriContext.Provider>
        )
    }
}