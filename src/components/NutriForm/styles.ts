import { styled } from "@/styles";

export const NutriFormContainer = styled("div",{
    background:"$gray100",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    gap:"2rem",
    padding:"4rem 0"
})

export const NutriTitle = styled("div",{
    textAlign:"center",
    display:"flex",
    flexDirection:"column",
    
    
    gap:"1rem",

    color:"$green600",

    h1:{
        fontSize:"$2xl",
        letterSpacing:"1px"
    },
    span:{
        color:"$gray600",
        fontWeight:600
    }
})


export const NutriSearch = styled("form",{

    display:"flex",
    flexDirection:"column",

    gap:"1rem",
  
    h1:{
        fontWeight:600
    },

    marginTop:"1rem",
    "input, button":{
        
        border:"none",
        fontSize:"1rem",
        borderRadius:".3rem",
    },

    input:{
        padding:".8rem",
        width:"25rem",
        outline:"none",
        border:"$green600, 1px solid",

    },
    button:{


        cursor:"pointer",
        fontWeight:600,
        backgroundColor:"$green600",
        color:"$white",
        padding:"1rem 0"
    }
})