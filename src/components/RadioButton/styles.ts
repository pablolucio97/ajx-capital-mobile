import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

type DotProps = {
  isChecked: boolean;
};

export const RadioContainer = styled.View`
  align-items: center;
  justify-content: center;
  width: ${RFValue(32)}px;
  height: ${RFValue(32)}px;
  border-radius: ${RFValue(32)}px;
  background-color: ${({ theme }) => theme.colors.inputs};
  border: 0.5px solid ${({ theme }) => theme.colors.borders};
  margin-right: 24px;
`;

export const Dot = styled.View<DotProps>`
  align-items: center;
  justify-content: center;
  width: ${RFValue(24)}px;
  height: ${RFValue(24)}px;
  border-radius: ${RFValue(24)}px;
  background-color: ${({ theme, isChecked }) => (isChecked ? theme.colors.primary : 'transparent')};
`;
