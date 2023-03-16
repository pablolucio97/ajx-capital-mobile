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
export const HeaderContainer = styled.View`
align-items: center;
padding-bottom: 0;
margin: ${RFValue(24)}px 0;
`


export const SearchContainer = styled.View`
width: 100%;
flex-direction: row;
align-items: center;
`

export const InputContainer = styled.View`
width: 84%;
flex-direction: row;
`

export const ButtonContainer = styled.View`
width: 16%;
`


export const HorizontalScrollContainer = styled.ScrollView`
width: 100%;
`
export const BadgesContainer = styled.View`
flex-direction: row;
margin: ${RFValue(16)}px 0;
`

export const Button = styled.TouchableOpacity`
width: 100%;
justify-content: center;
align-items: center;
`

export const Subtitle = styled.Text`
font-size: ${RFValue(16)}px;
font-family: ${({ theme }) => theme.fonts.primary_700};
color: ${({ theme }) => theme.colors.textDark};
margin: ${RFValue(16)}px 0;
`

export const TitleHeaderContdainer = styled.View`
width: 100%;
flex-direction: row;
justify-content: space-between;
background-color: transparent;
`
export const TitleContainer = styled.View`
flex-direction: row;
`

export const Title = styled.Text`
font-size: ${RFValue(20)}px;
font-family: ${({ theme }) => theme.fonts.primary_700};
color: ${({ theme }) => theme.colors.textDark};
`

export const LogoContainer = styled.View`
`