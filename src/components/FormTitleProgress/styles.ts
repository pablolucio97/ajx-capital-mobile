import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
width: 100%;
flex-direction: row;
align-items: center;
border-radius: ${RFValue(10)}px;
background-color: ${({ theme }) => theme.colors.backgroundLight};
elevation: 2;
padding: ${RFValue(16)}px ${RFValue(24)}px;
`

export const Title = styled.Text`
margin-left: ${RFValue(24)}px;
font-size: ${RFValue(16)}px;
font-family: ${({ theme }) => theme.fonts.primary_700};
color: ${({ theme }) => theme.colors.textDark};
`

export const StatusContainer = styled.View`
width:  ${RFValue(32)}px;
height:  ${RFValue(32)}px;
align-items: center;
justify-content: center;
border-color: ${({ theme }) => theme.colors.success};
border-width:  ${RFValue(4)}px;
border-radius:  ${RFValue(16)}px;
`
export const StatusText = styled.Text`
font-size: ${RFValue(14)}px;
font-family: ${({ theme }) => theme.fonts.primary_600};
color: ${({ theme }) => theme.colors.textDark};
`


