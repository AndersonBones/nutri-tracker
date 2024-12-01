import { styled } from "@/styles";

export const Foods = styled("div",{
    width:"80rem",
    margin:"auto",
    display:"grid",
    gridTemplateColumns:"1fr 1fr",
    gap:"3rem"
})


export const FoodContainer = styled("div",{
    display:"flex",
    flexDirection:"column",
    justifyContent:"center"

  
})

export const FoodDetailContainer = styled("div",{
    h3:{
        textAlign:"center",
        border:"1px solid $gray200",
        borderRadius:".3rem",
        padding:".2rem 0"
    },

    display:"flex",
    flexDirection:"column",
    justifyContent:"flex-start",
    alignItems:"stretch",
   
    gap:"2rem",
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


export const FoodDescription = styled("div",{
    borderRadius:".3rem",
    backgroundColor:"$gray100",
    border:"1px solid $gray200",
    padding:".5rem",

    display:"flex",
    flexDirection:"column",
    gap:"1rem",
 

    p:{
        margin:0,
    
    }
    
})

export const FoodNutritionClaims = styled("div",{
    border:"1px solid black",
})

export const FoodNutritionFacts = styled("div",{
    border:"1px solid black",
})