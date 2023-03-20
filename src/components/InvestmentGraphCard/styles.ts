import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
width: 98%;
min-height: ${RFValue(232)}px;
border-radius: ${RFValue(10)}px;
padding: ${RFValue(16)}px ${RFValue(24)}px;
margin: ${RFValue(8)}px auto;
background-color: ${({ theme }) => theme.colors.backgroundLight};
elevation: 2;
`
export const LegendsContainer = styled.View`
width: 100%;
flex-direction: row;
`
export const GraphContainer = styled.View`
width: 100%;
flex-direction: row;
`

export const InvestmentLegendText = styled.Text`
font-size: ${RFValue(14)}px;
font-family: ${({ theme }) => theme.fonts.primary_700};
color: ${({ theme }) => theme.colors.primary};
`

export const RenumberingLegendText = styled.Text`
font-size: ${RFValue(14)}px;
font-family: ${({ theme }) => theme.fonts.primary_700};
color: ${({ theme }) => theme.colors.success};
margin-left: ${RFValue(24)}px;
`

export const LabelLegendText = styled.Text`
font-size: ${RFValue(12)}px;
font-family: ${({ theme }) => theme.fonts.primary_400};
color: ${({ theme }) => theme.colors.placeholder};
margin-left: ${RFValue(-4)}px;
margin-bottom: ${RFValue(4)}px;
`
