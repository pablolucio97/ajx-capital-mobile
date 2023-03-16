import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
width: 100%;
flex-direction: row;
align-items: center;
padding: ${RFValue(16)}px;
border-radius: ${RFValue(10)}px;
background-color: ${({ theme }) => theme.colors.backgroundLight};
elevation: 2;
margin-bottom: ${RFValue(16)}px;
`

export const Text = styled.Text`
font-size: ${RFValue(14)}px;
font-family: ${({ theme }) => theme.fonts.primary_400};
color: ${({ theme }) => theme.colors.textDark};
margin-left: ${RFValue(24)}px;
`