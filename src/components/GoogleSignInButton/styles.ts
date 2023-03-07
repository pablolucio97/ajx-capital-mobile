import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize'

interface ButtonProps {
    disabled?: boolean;
}

export const Container = styled.TouchableOpacity<ButtonProps>`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 56px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.backgroundLight};;
  elevation: 8;
  ${({ disabled }) =>
        disabled
            ? css`
          opacity: 0.72;
        `
            : css`
          opacity: 1;
        `}
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.textDark};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.primary_700};
`;

export const ContentContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
`