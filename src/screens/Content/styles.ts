import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { getScreenWidth } from 'utils/layout';

export const Container = styled.View`
width: ${getScreenWidth()}px;
padding: ${RFValue(24)}px ${RFValue(16)}px; 
`

export const ContentContainer = styled.ScrollView`
width: 100%;
`

export const HorizontalScrollContainer = styled.ScrollView`
width: 100%;
`
export const BadgesContainer = styled.View`
flex-direction: row;
margin: ${RFValue(16)}px 0;
`

export const Subtitle = styled.Text`
font-size: ${RFValue(16)}px;
font-family: ${({ theme }) => theme.fonts.primary_700};
color: ${({ theme }) => theme.colors.textDark};
margin: ${RFValue(16)}px 0;
`