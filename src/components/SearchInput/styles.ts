import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: ${RFValue(56)}px;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: ${RFValue(10)}px;
  border-color: #E6E6E6;
  border-width: ${RFValue(1)}px;
  `;

export const Search = styled.TextInput`
  width: 80%;
  border-radius: ${RFValue(10)}px;
  padding: ${RFValue(16)}px ${RFValue(24)}px;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  `;

export const SearchButton = styled.TouchableOpacity`
  width: 20%;
  justify-content: center;
  align-items: center;
`;

