import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
width: 98%;
height: ${RFValue(160)}px;
border-radius: ${RFValue(10)}px;
padding: ${RFValue(16)}px ${RFValue(24)}px;
margin: ${RFValue(8)}px auto;
background-color: ${({ theme }) => theme.colors.backgroundLight};
elevation: 2;
`

export const ContentContainer = styled.View`
width: 100%;
flex-direction: row;
justify-content: space-between;
`

export const BalanceContentContainer = styled.View`
flex-direction: row;
margin-top: ${RFValue(16)}px;

`

export const BalanceTitle = styled.Text`
font-size: ${RFValue(42)}px;
font-family: ${({ theme }) => theme.fonts.primary_700};
color: ${({ theme }) => theme.colors.textDark};
margin: 0 ${RFValue(8)}px;
`

export const BalanceLowTitle = styled.Text`
font-size: ${RFValue(16)}px;
font-family: ${({ theme }) => theme.fonts.primary_700};
color: ${({ theme }) => theme.colors.textDark};
margin-top: ${RFValue(12)}px;
`

export const Text = styled.Text`
font-size: ${RFValue(14)}px;
font-family: ${({ theme }) => theme.fonts.primary_500};
color: ${({ theme }) => theme.colors.placeholder};
margin-top: ${RFValue(8)}px;
`

export const TextPlaceholder = styled.Text`
font-size: ${RFValue(14)}px;
font-family: ${({ theme }) => theme.fonts.primary_400};
color: ${({ theme }) => theme.colors.placeholder};
margin-top: ${RFValue(8)}px;
`

export const BalanceText = styled.Text`
font-size: ${RFValue(14)}px;
font-family: ${({ theme }) => theme.fonts.primary_500};
color: ${({ theme }) => theme.colors.success};
margin-top: ${RFValue(8)}px;
`

