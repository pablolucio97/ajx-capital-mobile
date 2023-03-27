import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  line-height: ${RFValue(22)};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.titleDark};
  margin-bottom: ${RFValue(16)}px;
`;

export const SubTitle = styled.Text`
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(16)};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.subtitle};
  margin-bottom: ${RFValue(16)}px;
`;

export const Label = styled.Text`
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(16)};
  font-weight: 300;
  color: ${({ theme }) => theme.colors.textDark};
  margin-left: ${RFValue(8)}px;
  margin-bottom: ${RFValue(8)}px;
`;

export const Input = styled.TextInput`
  flex: 1;
  width: 100%;
  height: ${RFValue(56)}px;
  background-color: ${({ theme }) => theme.colors.inputs};
  border: 0.5px solid ${({ theme }) => theme.colors.borders};
  border-radius: ${RFValue(10)}px;
  margin-bottom: ${RFValue(40)}px;
  padding: 0 8px;
`;

export const Button = styled.TouchableOpacity`
  flex: 1;
  width: 100%;
  height: ${RFValue(56)}px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${RFValue(10)}px;
`;

export const ButtonText = styled.Text`
  font-weight: 700;
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(18)};
  text-align: center;
  color: ${({ theme }) => theme.colors.textLight};
`;
