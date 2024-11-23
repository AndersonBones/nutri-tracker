import { CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle } from '@coreui/react';
import Dropdown from 'react-bootstrap/Dropdown';
import { CDropdownComponent, CDropdownToggleComponent, CDropdownMenuComponent, CDropdownItemComponent } from './styles';

export const DropdownComponent = () => {
    return (
        <CDropdownComponent>
            <CDropdownToggleComponent >Dropdown button</CDropdownToggleComponent>
            <CDropdownMenuComponent >
                <CDropdownItemComponent >Action</CDropdownItemComponent>
                <CDropdownItemComponent >Another action</CDropdownItemComponent>
                <CDropdownItemComponent >Something else here</CDropdownItemComponent>
            </CDropdownMenuComponent>
        </CDropdownComponent>
    )
	
}




export default DropdownComponent