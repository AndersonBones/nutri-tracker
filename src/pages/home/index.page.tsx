

import NutriForm from "@/components/NutriForm";
import { HomeContainer, NutriDescription } from "./styles";
import { useContext } from "react";
import { NutriContext } from "@/contexts/nutriContext";
import FoodsComponent from "@/components/FoodsContainer";






export default function Home() {

  const {foods, search_term} = useContext(NutriContext)
  return (
    <HomeContainer>
      <NutriForm/>  

      <NutriDescription>
          {search_term && (
            <p>Seu termo de pesquisa: <span>"{search_term}"</span></p>
          )}
          

          {foods.length > 0 && (
            <h2><span>{foods.length}</span> Resultados encontrados</h2>
          )}

          
      </NutriDescription>
      

      <FoodsComponent/>

    </HomeContainer>
  )
}
