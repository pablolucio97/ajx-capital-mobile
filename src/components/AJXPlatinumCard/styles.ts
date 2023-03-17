import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
width: ${RFValue(304)}px;
height: ${RFValue(112)}px;
border-radius: ${RFValue(10)}px;
padding: ${RFValue(24)}px;
align-items: center;
justify-content: flex-start;
background-color: ${({ theme }) => theme.colors.primaryDark};
margin: ${RFValue(16)}px 0;
`

export const ContainerImage = styled.TouchableOpacity``

export const Image = styled.ImageBackground`
width: ${RFValue(304)}px;
height: ${RFValue(112)}px;
border-radius: ${RFValue(10)}px;
padding: ${RFValue(24)}px;
justify-content: flex-start;
align-items: center;
margin: ${RFValue(16)}px 0;
margin-right: ${RFValue(8)}px;
`

export const Title = styled.Text`
width: 100%;
font-size: ${RFValue(24)}px;
font-family: ${({ theme }) => theme.fonts.primary_700};
color: ${({ theme }) => theme.colors.backgroundLight};
`

export const Text = styled.Text`
font-size: ${RFValue(12)}px;
font-family: ${({ theme }) => theme.fonts.primary_500};
color: ${({ theme }) => theme.colors.backgroundLight};
margin-top: ${RFValue(4)}px;
margin-left: ${RFValue(-50)}px;
width: 80%;
`