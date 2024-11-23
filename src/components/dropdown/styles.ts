import { styled } from "@/styles";
import { CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle } from "@coreui/react";


export const CDropdownComponent = styled(CDropdown, {
    width:"100%",
    backgroundColor:"transparent",


})

export const CDropdownMenuComponent = styled(CDropdownMenu, {
    width:"100%",

})

export const CDropdownItemComponent = styled(CDropdownItem,{
    width:"100%",
    fontWeight:600,

    "&:active":{
        backgroundColor:"$gray200",
        color:"$gray600",
        borderColor:"$gray200",
    },


})

export const CDropdownToggleComponent = styled(CDropdownToggle, {
    width:"100%",
    backgroundColor:"transparent",
    color:"$gray600",
    fontWeight:600,
    borderColor:"$gray200",

    "&:hover":{

        color:"$gray600",
        borderColor:"$gray200",
        backgroundColor:"transparent"
    },

    "&:active":{
        backgroundColor:"$gray100",
        color:"$gray600",
        borderColor:"$gray200",
    }
})