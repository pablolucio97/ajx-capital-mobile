import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
display: flex;
justify-content: space-between;
align-items: flex-start;
margin: ${RFValue(8)}px;
width: ${RFValue(120)}px;
`
export const Image = styled.Image`
width: 100%;
border-radius: ${RFValue(10)}px;
height: ${RFValue(168)}px;
`
export const Title = styled.Text`
font-size: ${RFValue(16)}px;
font-family: ${({ theme }) => theme.fonts.primary_700};
color: ${({ theme }) => theme.colors.textDark};
margin-left: ${RFValue(8)}px;
margin-bottom: ${RFValue(8)}px;
`

export const Text = styled.Text`
font-size: ${RFValue(12)}px;
font-family: ${({ theme }) => theme.fonts.primary_400};
color: ${({ theme }) => theme.colors.textDark};
margin-left: ${RFValue(8)}px;
`