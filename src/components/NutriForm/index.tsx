import { api } from "@/utils/axios";
import { NutriFormContainer, NutriSearch, NutriTitle } from "./styles";
import {z} from "zod"
import {useForm} from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { NutriContext } from "@/contexts/nutriContext";



const searchSchema = z.object({
    search_term:z.string().min(3).max(40)
})

type searchSchemaType = z.infer<typeof searchSchema>


const NutriForm = ()=>{

    const {set_foods, set_query} = useContext(NutriContext)
    
    const {
        register, handleSubmit, formState:{errors}
    } = useForm<searchSchemaType>({resolver:zodResolver(searchSchema)})

    const get_food = async (data:searchSchemaType) =>{
    
        const {search_term} = data

        set_query(search_term)

        try {
            const response = await api.get(`/search-food?search_term=${search_term}`)
            const {data} = response


            
            const foods = data.map((item:any)=>{

                return {
                    description: item.food_description,
                    id:item.food_id,
                    name:item.food_name,
                    url:item.food_url
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
                <input type="search" {...register("search_term")} autoComplete="off" id="search-term" placeholder="Termo de busca"/>
                <button type="submit">Buscar</button>
            </NutriSearch>
            
        </NutriFormContainer>
    )
}

export default NutriForm