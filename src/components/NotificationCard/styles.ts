import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
width: 100%;
align-items: center;
border-radius: ${RFValue(10)}px;
background-color: ${({ theme }) => theme.colors.backgroundLight};
elevation: 2;
padding: ${RFValue(24)}px;
margin-bottom: ${RFValue(16)}px;
`

export const TitleContainer = styled.View`
width: 100%;
flex-direction: row;
`
export const TextContainer = styled.View`
width: 100%;
flex-direction: row;
margin-top: ${RFValue(8)}px;
justify-content: space-around;
`

export const Title = styled.Text`
font-size: ${RFValue(14)}px;
font-family: ${({ theme }) => theme.fonts.primary_500};
color: ${({ theme }) => theme.colors.textDark};
margin-left: ${RFValue(12)}px;
max-width: 88%;
`

export const Text = styled.Text`
font-size: ${RFValue(12)}px;
font-family: ${({ theme }) => theme.fonts.primary_300};
color: ${({ theme }) => theme.colors.textDark};
max-width: 80%;
`