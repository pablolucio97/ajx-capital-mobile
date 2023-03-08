import { RFValue } from 'react-native-responsive-fontsize';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: ${Dimensions.get('screen').width};
  height:  ${RFValue(40)}px;
  flex-direction: row;
  align-items: center;
  margin-top: ${RFValue(24)}px;
  padding-left: ${RFValue(24)}px;
  `;

export const ContentContainer = styled.View``

export const Title = styled.Text`
  font-size: ${RFValue(28)}px;
  font-family: ${({ theme }) => theme.fonts.primary_700};
  padding-left: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.textDark};
`;

export const BackButton = styled.TouchableOpacity``
