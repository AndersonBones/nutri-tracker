import { styled } from "@/styles";

export const HomeContainer = styled("div", {
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",    
    
})


export const NutriDescription = styled("div",{
    display:"flex",
    flexDirection:"column",

    padding:"2rem",
    gap:"2rem",

    p:{
        fontSize:"$md"
    },

    span:{
        fontWeight:600,
        color:"$green600"
    },

    h2:{
        fontSize:"$lx",
        fontWeight:300
    }
})