import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { getScreenWidth } from 'utils/layout';

export const Container = styled.View`
width: ${getScreenWidth()}px;
flex: 1;
align-items: center;
padding: ${RFValue(48)}px ${RFValue(24)}px;
`

export const HeaderContainer = styled.View`
width: 100%;
height: ${RFValue(80)}px;
flex-direction: row;
align-items: center;
`

export const Title = styled.Text`
font-size: ${RFValue(16)}px;
font-family: ${({ theme }) => theme.fonts.primary_700};
color: ${({ theme }) => theme.colors.textDark};
margin-left: ${RFValue(16)}px ;
`

export const Button = styled.TouchableOpacity`
flex-direction: row;
align-items: center;
`