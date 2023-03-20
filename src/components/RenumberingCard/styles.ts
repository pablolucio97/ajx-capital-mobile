import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
width: 98%;
height: ${RFValue(112)}px;
border-radius: ${RFValue(10)}px;
padding: ${RFValue(24)}px;
margin: ${RFValue(8)}px auto;
background-color: ${({ theme }) => theme.colors.backgroundLight};
elevation: 2;
`

export const ContentContainer = styled.View`
width: 100%;
flex-direction: row;
justify-content: space-between;
margin-bottom: ${RFValue(16)}px;
`
export const BalanceTitle = styled.Text`
font-size: ${RFValue(22)}px;
font-family: ${({ theme }) => theme.fonts.primary_600};
color: ${({ theme }) => theme.colors.primary};
`

export const RenumberingTitle = styled.Text`
font-size: ${RFValue(14)}px;
font-family: ${({ theme }) => theme.fonts.primary_600};
color: ${({ theme }) => theme.colors.textDark};
`

export const Text = styled.Text`
font-size: ${RFValue(14)}px;
font-family: ${({ theme }) => theme.fonts.primary_400};
color: ${({ theme }) => theme.colors.textDark};
`

