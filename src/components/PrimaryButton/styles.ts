import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize'

interface ButtonProps {
    disabled?: boolean;
    bgColor?: string;
}

export const Container = styled.TouchableOpacity<ButtonProps>`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 56px;
  border-radius: 10px;
  background-color: ${({ theme, bgColor }) => bgColor ? bgColor : theme.colors.primary};
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
  color: ${({ theme }) => theme.colors.textLight};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.primary_700};
`;