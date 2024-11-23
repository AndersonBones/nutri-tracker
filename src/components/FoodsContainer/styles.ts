import { styled } from "@/styles";

export const Foods = styled("div",{
    width:"80rem",
    margin:"auto",
    display:"grid",
    gridTemplateColumns:"50% 50%",
    gap:"3rem"
})


export const FoodContainer = styled("div",{
    display:"flex",
    flexDirection:"column",
    justifyContent:"center"

  
})

export const FoodDetailContainer = styled("div",{
    display:"flex",
    flexDirection:"column",
    justifyContent:"flex-start",
    alignItems:"center",
   

   
    gap:"2rem",
    div:{
        width:"100%"
    }
    
})

export const FoodChart = styled("div",{
    
    display:"flex",
    justifyContent:"center",

    
})

export const FoodDetailImage = styled("div",{
    display:"flex",
    justifyContent:"center",

   
    borderRadius:".3rem",
    img:{
        borderRadius:".3rem",
        width:"20rem",
    }
})

export const FoodServings = styled("div",{
    
})

export const FoodDescription = styled("div",{
    borderRadius:".3rem",
    backgroundColor:"$gray100",
    border:"1px solid $gray200",
    padding:".3rem"
})

export const FoodNutritionClaims = styled("div",{
    border:"1px solid black",
})

export const FoodNutritionFacts = styled("div",{
    border:"1px solid black",
})