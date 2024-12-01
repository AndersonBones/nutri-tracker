import { styled } from "@/styles";



export const NutritionFactsContainer = styled("div",{
    display:"flex",
    flexDirection:"column",
    border:"1px solid $gray200",
    fontWeight:600,
    padding:"1rem",
    borderRadius:".3rem",

    gap:"1rem"
 
})

export const NutritionTitle = styled("div",{
    
    h2:{
        textAlign:"center"
    }
})  

export const NutritionServing = styled("div",{
    backgroundColor:"$gray100",
    padding:".3rem 0",
    display:"flex",
    justifyContent:"space-between"
})

export const NutritionCalories = styled("div",{
    display:"flex",
    justifyContent:"space-between"
})

export const NutritionFactsTable = styled("div",{
    display:"flex",
    width:"100%",
   
})

export const NutritionBody = styled("div",{
    display:"flex",
    flexDirection:"column",
    width:"100%",
 

})

export const NutritionRowTotal = styled("div",{
    
    display:"flex",
    flexDirection:"column",
    
})


export const NutritionRowTotalHeader = styled("div",{
    display:"flex",
    backgroundColor:"$gray100",
    justifyContent:"space-between",
  
  
    padding:".3rem 0",



})

export const NutritionRowSubtotal = styled("div",{
    display:"flex",
    flexDirection:"column",
    backgroundColor:"$white",
    fontWeight:400

})


export const NutritionDataSubtotal = styled("div",{
    textAlign:"end",
    fontWeight:600
    
})

export const NutritionRowSubtotalData = styled("div",{
    width:"100%",
    display:"flex",
    justifyContent:"space-between",
    borderBottom:"1px solid $gray200",
    backgroundColor:"$white",
    padding:".3rem 0 .3rem 1rem ",

    fontWeight:400
    
    

})

export const NutritionLabelSubtotal = styled("div",{
   
    
})

export const NutritionLabelTotal = styled("div",{
    
})

export const NutritionDataTotal = styled("div",{
    textAlign:"end",
    fontWeight:600
})
