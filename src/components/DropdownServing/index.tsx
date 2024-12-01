
import { useContext, useState } from 'react';
import { CDropdownComponent, CDropdownToggleComponent, CDropdownMenuComponent, CDropdownItemComponent } from './styles';
import { Serving } from '@/types/nutri';
import { NutriContext } from '@/contexts/nutriContext';
import { Box, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';







interface DropdownServingProps{
    servingList:Serving[]
}
export const DropdownServing = ({servingList}:DropdownServingProps) => {

    const {
        set_nutrition_facts, 
    } = useContext(NutriContext)

    const [servingOptionId, setServingOption] = useState("")
    
    const handleServingOption = (event: SelectChangeEvent)=>{

        if(event.target.value as string){
            setServingOption(event.target.value as string)
        }
        

        if(servingOptionId){
            set_nutrition_facts(servingList, servingOptionId)
        }
    }
    

    return (
        
        
        <Box >
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Serving</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    onChange={handleServingOption}
                    value={servingOptionId}
                    label="Serving"
                >   
                    {servingList.map(item=>{
                        return (
                            <MenuItem value={item.serving_id}>
                                {item.serving_description}
                            </MenuItem>
                        )
                    })}
                    
                
                </Select>
            </FormControl>
        </Box>
        
    )
	
}




export default DropdownServing