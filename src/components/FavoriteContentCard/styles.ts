import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
width: 98%;
flex-direction: row;
align-items: center;
border-radius: ${RFValue(10)}px;
padding: ${RFValue(24)}px;
margin: ${RFValue(8)}px auto;
background-color: ${({ theme }) => theme.colors.backgroundLight};
elevation: 2;
`

export const Image = styled.Image`
width: ${RFValue(72)}px;
height: ${RFValue(72)}px;
border-radius: ${RFValue(10)}px;
margin-right: ${RFValue(8)}px;
`

export const ContentContainer = styled.View`
width: 56%;
`

export const Title = styled.Text`
font-size: ${RFValue(12)}px;
font-family: ${({ theme }) => theme.fonts.primary_700};
color: ${({ theme }) => theme.colors.textDark};
`

export const Text = styled.Text`
font-size: ${RFValue(12)}px;
font-family: ${({ theme }) => theme.fonts.primary_400};
color: ${({ theme }) => theme.colors.textDark};
margin-top: ${RFValue(8)}px;
`

export const FavoriteButton = styled.TouchableOpacity``