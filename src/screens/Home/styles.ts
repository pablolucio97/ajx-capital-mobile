import styled from 'styled-components/native'
import { getScreenWidth } from 'utils/layout';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
width: ${getScreenWidth()}px;
flex: 1;
align-items: center;
padding: ${RFValue(24)}px;
`
export const ScrollContainer = styled.ScrollView`
width: 100%;
`

export const HeaderContainer = styled.View`
width: 100%;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin: ${RFValue(-12)}px 0;
`

export const GreetUserContainer = styled.View`
`

export const UserNameText = styled.Text`
font-size: ${RFValue(22)}px;
font-family: ${({ theme }) => theme.fonts.primary_700};
color: ${({ theme }) => theme.colors.textDark};
`

export const ContentContainer = styled.ScrollView`
width: 100%;
`

export const HorizontalScrollContainer = styled.ScrollView`
width: 100%;
`

