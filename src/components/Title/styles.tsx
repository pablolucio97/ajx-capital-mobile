import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const TitleEl = styled.Text`
font-size: ${RFValue(16)}px;
font-family: ${({ theme }) => theme.fonts.primary_700};
color: ${({ theme }) => theme.colors.textDark};
`