import styled from 'styled-components/native'
import { getScreenWidth } from 'utils/layout'
import { StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import theme from 'themes/theme'

export const Container = styled.View`
width: ${getScreenWidth()}px;
flex: 1;
align-items: center;
background-color: ${({ theme }) => theme.colors.background};
padding:  ${RFValue(32)}px ${RFValue(22)}px 0;
`
export const ContentContainer = styled.ScrollView`
`

export const TextContainer = styled.View`
width: 100%;
`
export const SvgContainer = styled.View`
width: 100%;
align-items: center;
margin-bottom: ${RFValue(48)}px;
`


export const Styles = StyleSheet.create({
    userProfileCard:{
        marginBottom: RFValue(24),
    },
    text:{
        marginTop: RFValue(24),
        marginBottom: RFValue(24),
        textAlign: 'center',
        color: theme.colors.placeholder
    },
})