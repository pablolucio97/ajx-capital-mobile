import { Container, Label, Style } from './styles';
import SelectDropdown, { SelectDropdownProps } from 'react-native-select-dropdown';
import FeaterIcon from '@expo/vector-icons/Feather'

type SelectPicker = {
    label: string
}

type SelectPickerProps = SelectDropdownProps & SelectPicker

export function SelectPicker({ label, ...rest }: SelectPickerProps) {
    return (
        <Container>
            <Label>{label}</Label>
            <SelectDropdown
                {...rest}
                buttonTextStyle={Style.buttonTextStyle}
                dropdownStyle={Style.dropdownStyle}
                buttonStyle={Style.buttonStyle}
                rowTextStyle={Style.buttonTextStyle}
                renderDropdownIcon={() =>
                    <FeaterIcon
                        size={24}
                        color='#000000'
                        name='chevron-down'
                    />}
            />
        </Container>
    )
}