import { api } from "@/utils/axios";
import { NutriFormContainer, NutriSearch, NutriTitle } from "./styles";
import {z} from "zod"
import {useForm} from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { NutriContext } from "@/contexts/nutriContext";



const searchSchema = z.object({
    search_expression:z.string().min(3).max(40)
})

type searchSchemaType = z.infer<typeof searchSchema>


const NutriForm = ()=>{

    const {set_foods, set_query} = useContext(NutriContext)
    
    const {
        register, handleSubmit, formState:{errors}
    } = useForm<searchSchemaType>({resolver:zodResolver(searchSchema)})

    const get_food = async (data:searchSchemaType) =>{
    
        const {search_expression} = data

        set_query(search_expression)

        try {
            const response = await api.get(`/search-food?search_expression=${search_expression}`)
            const {data} = response


            const {foods_search: {results}} = data
            const {food} = results

            console.log(food)

            
            const foods = food.map((item:any)=>{

                return {
                    id:item.food_id,
                    name:item.food_name,
                    description: item.food_description,
                    food_categories:item.food_sub_categories.food_sub_category,
                    food_images:item.food_images.food_image,
                    url:item.food_url,
                    serving:Array.isArray(item.servings.serving) ? item.servings.serving 
                    : new Array(item.servings.serving)

                }
                
            })

            set_foods(foods)

            return;

        } catch (error) {
            alert("erro ao obter dados")
        }

        
    }   

   

    return (
        <NutriFormContainer>
            <NutriTitle>
                <h1><strong>Nutri <span>tracker</span></strong></h1>
                
                <span>Busque informações nutricionais sobre qualquer alimento</span>
            </NutriTitle>

            <NutriSearch onClick={handleSubmit(get_food)}>
                <input type="search" {...register("search_expression")} autoComplete="off" id="search-term" placeholder="Termo de busca"/>
                <button type="submit">Buscar</button>
            </NutriSearch>
            
        </NutriFormContainer>
    )
}

export default NutriForm