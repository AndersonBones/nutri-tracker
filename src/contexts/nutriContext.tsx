import { FoodDetailsInteface, foodItem, NutriContextInterface, NutriContextProps } from "@/types/nutri";
import React from "react";



type FoodState = {
    foods: foodItem[];
    search_term:string
    food_detail:FoodDetailsInteface
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
                servings:[]
            }
        };

        this.set_foods = this.set_foods.bind(this)

        this.set_query = this.set_query.bind(this)

        this.set_detail_food = this.set_detail_food.bind(this)
    }

    

    set_foods(foods:foodItem[]): void {
        
        this.setState({
            foods
        })

        
    }

    set_detail_food(food_detail:FoodDetailsInteface){

        const {food_name, food_type, food_url, id, servings} = food_detail

        this.setState({
            food_detail:{
                food_name,
                food_type,
                food_url,
                id,
                servings
            }
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
                set_detail_food:this.set_detail_food,
                set_foods:this.set_foods,
                set_query:this.set_query,
                search_term:this.state.search_term
            }}>
                {this.props.children}
            </NutriContext.Provider>
        )
    }
}