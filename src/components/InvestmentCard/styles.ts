import { RFValue } from 'react-native-responsive-fontsize'
import styled, { css } from 'styled-components/native'

export const Container = styled.View`
width: 98%;
min-height: ${RFValue(232)}px;
border-radius: ${RFValue(10)}px;
padding: ${RFValue(24)}px;
margin: ${RFValue(8)}px auto;
background-color: ${({ theme }) => theme.colors.backgroundLight};
elevation: 2;
`
export const ContentContainer = styled.View`
width: 100%;
flex-direction: row;
justify-content: space-between;
margin: ${RFValue(8)}px 0;
`

export const AdditionalContentContainer = styled.View`
width: 100%;
`

export const TitleContainer = styled.View`
flex-direction: row;
justify-content: space-between;
margin: ${RFValue(8)}px 0;
`

export const Text = styled.Text`
font-size: ${RFValue(14)}px;
font-family: ${({ theme }) => theme.fonts.primary_400};
color: ${({ theme }) => theme.colors.textDark};
`

export const StrongText = styled.Text`
font-size: ${RFValue(14)}px;
font-family: ${({ theme }) => theme.fonts.primary_600};
color: ${({ theme }) => theme.colors.textDark};
`

export const ErrorText = styled.Text`
font-size: ${RFValue(14)}px;
font-family: ${({ theme }) => theme.fonts.primary_400};
color: ${({ theme }) => theme.colors.error};
margin: ${RFValue(12)}px 0;
`

export const Title = styled.Text`
font-size: ${RFValue(16)}px;
font-family: ${({ theme }) => theme.fonts.primary_700};
color: ${({ theme }) => theme.colors.textDark};
max-width: 80%;
`

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: ${RFValue(48)}px;
  justify-content: center;
  align-items: center;
  border-radius: ${RFValue(10)}px;
  border-width: ${RFValue(1)}px;
  background-color: transparent;
  border-color: ${({ theme }) => theme.colors.primary};
  ${({ disabled }) =>
        disabled
            ? css`
          opacity: 0.72;
        `
            : css`
          opacity: 1;
        `}
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.primary_700};
`;
