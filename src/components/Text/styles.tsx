import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const TextEl = styled.Text`
font-size: ${RFValue(14)}px;
font-family: ${({ theme }) => theme.fonts.primary_500};
color: ${({ theme }) => theme.colors.textDark};
`