import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity``

export const Image = styled.ImageBackground`
width: ${RFValue(224)}px;
height: ${RFValue(264)}px;
border-radius: ${RFValue(10)}px;
justify-content: flex-end;
padding: ${RFValue(24)}px;
margin: ${RFValue(8)}px;
`

export const Title = styled.Text`
font-size: ${RFValue(16)}px;
font-family: ${({ theme }) => theme.fonts.primary_700};
color: ${({ theme }) => theme.colors.backgroundLight};
`

export const AuthorText = styled.Text`
font-size: ${RFValue(12)}px;
font-family: ${({ theme }) => theme.fonts.primary_400};
color: ${({ theme }) => theme.colors.backgroundLight};
margin-bottom: ${RFValue(8)}px;
`