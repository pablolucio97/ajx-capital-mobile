import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'
import { getScreenWidth } from 'utils/layout'

export const Container = styled.View`
width: ${getScreenWidth()}px;
flex: 1;
justify-content: center;
align-items: center;
`

export const Image = styled.Image`
width: ${RFValue(124)}px;
height: ${RFValue(124)}px;
`

export const PodcastsContainer = styled.View`
width: 100%;
align-items: flex-start;
padding: ${RFValue(24)}px;
`

export const PodcastsListContainer = styled.ScrollView`
width: 90%;
`

export const Subtitle = styled.Text`
font-size: ${RFValue(16)}px;
font-family: ${({ theme }) => theme.fonts.primary_700};
color: ${({ theme }) => theme.colors.textDark};
`