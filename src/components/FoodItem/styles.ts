import { styled } from "@/styles";


export const FoodItemContainer = styled("button",{
    display:"flex",
    textAlign:"start",
    justifyContent:"space-between",
    alignItems:"center",
    
    backgroundColor:"transparent",
    cursor:"pointer",

    padding:"1rem .5rem",

    border:"none",

    borderBottom:"1px solid $gray200",

    "&:hover":{
        backgroundColor:"$gray100"
    },

    svg:{
        color:"$green600"
    }
})


export const Food = styled("div",{
    display:"flex",
    flexDirection:"column",
    gap:"1rem"
})

export const FoodDescription = styled("div",{
    textAlign:"start"
})

export const FoodName = styled("div",{
    span:{
        color:"$blue500",
        fontWeight:600,
        fontSize:"$lg"
    }
})

