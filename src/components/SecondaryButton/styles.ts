import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize'

interface ButtonProps {
    disabled?: boolean;
    contentColor?: string;
}

export const Container = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: transparent;
  ${({ disabled }) =>
        disabled
            ? css`
          opacity: 0.72;
        `
            : css`
          opacity: 1;
        `}
`;

export const Title = styled.Text<ButtonProps>`
  color: ${({ theme, contentColor }) => contentColor ? contentColor : theme.colors.primaryDark};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
`;