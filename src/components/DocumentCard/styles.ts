import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const Container = styled.View`
width: 98%;
height: ${RFValue(160)}px;
padding: ${RFValue(24)}px;
justify-content: space-between;
align-items: center;
background-color: ${({ theme }) => theme.colors.backgroundLight};
border-radius: ${RFValue(10)}px;
margin: ${RFValue(24)}px  ${RFValue(2)}px ${RFValue(2)}px;
elevation: 2;
`

export const DataContainer = styled.View`
width: 100%;
justify-content: space-between;
align-items: center;
flex-direction: row;
margin-top: ${RFValue(24)}px;
`

export const DocumentImage = styled.Image`
width: ${RFValue(80)};
height: ${RFValue(64)};
`

export const DocumentTextContainer = styled.View`
`

export const DocumentText = styled.Text`
font-size: ${RFValue(10)}px;
font-family: ${({ theme }) => theme.fonts.primary_300};
color: ${({ theme }) => theme.colors.textDark};
`
export const DocumentTitle = styled.Text`
font-size: ${RFValue(10)}px;
font-family: ${({ theme }) => theme.fonts.primary_500};
color: ${({ theme }) => theme.colors.textDark};
`

export const IndicatorContainer = styled.View`
flex-direction: row;
justify-content: space-between;
width:  ${RFValue(40)}px;
`

export const Indicator = styled.View`
width: ${RFValue(8)}px;
height: ${RFValue(8)}px;
border-radius: ${RFValue(4)}px;
background-color: ${({ theme }) => theme.colors.background};
`