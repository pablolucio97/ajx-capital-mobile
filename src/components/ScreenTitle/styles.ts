import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const Container = styled.View`
width: 100%;
flex-direction: row;
justify-content: space-between;
background-color: transparent;
`
export const TitleContainer = styled.View`
flex-direction: row;
align-items: center;
`

export const CloseButton = styled.TouchableOpacity``

export const Title = styled.Text`
margin-left: ${RFValue(24)}px;
font-size: ${RFValue(16)}px;
font-family: ${({ theme }) => theme.fonts.primary_700};
color: ${({ theme }) => theme.colors.textDark};
`

export const LogoContainer = styled.View`
`