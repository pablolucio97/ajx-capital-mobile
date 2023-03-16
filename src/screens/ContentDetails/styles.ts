import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import { getScreenWidth } from 'utils/layout'
import {StyleSheet} from 'react-native'


export const Container = styled.View`
width: ${getScreenWidth()}px;
flex: 1;
align-items: center;
`

export const ImageContainer = styled.ImageBackground`
width: ${getScreenWidth()}px;
height:  ${RFValue(240)}px;
padding: ${RFValue(56)}px ${RFValue(24)}px;
`

export const ContentContainer = styled.View`
width: 100%;
flex: 1;
background-color: ${({ theme }) => theme.colors.backgroundLight};
padding: ${RFValue(24)}px;
border-top-left-radius: ${RFValue(20)}px;
border-top-right-radius: ${RFValue(20)}px;
margin-top: ${RFValue(-56)}px;
`

export const Button = styled.TouchableOpacity``

export const Styles = StyleSheet.create({
    title:{
        fontSize: RFValue(22),
        marginBottom: RFValue(16)
    },
    text:{
        fontSize: RFValue(12),
        marginBottom: RFValue(24)
    }
})