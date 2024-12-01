import { styled } from "@/styles";

export const FoodChartContainer = styled("div",{

    display:"flex",
    alignItems:"center",
    gap:"1.5rem",
    justifyContent:"center"
       
})

export const FoodChart = styled("div",{

})

export const FoodChartLegend = styled("div",{
    display:"flex",
    flexDirection:"column",
    gap:"1rem"
    
})

export const FoodLegendItem = styled("div",{
    display:"flex",
    gap:".5rem",
    alignItems:"center"
})

export const FoodLegendCircle = styled("div",{
    width:"1rem",
    height:"1rem",

    borderRadius:"50%"
})

export const FoodLegendData = styled("div",{
    display:"flex",
    flexDirection:"column",
    gap:"1rem",

    span:{
        fontSize:"$sm"
    }
})