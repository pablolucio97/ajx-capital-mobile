import styled from 'styled-components'
import CheckBox from 'expo-checkbox'
import { RFValue } from 'react-native-responsive-fontsize'


export const Checkbox = styled(CheckBox)`
    width: ${RFValue(32)}px;
    height: ${RFValue(32)}px;
    border-radius: 10px;
    background-color: #F9F9F9;
    border: 1px solid  #DADADA;
`