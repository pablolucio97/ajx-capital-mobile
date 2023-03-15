import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'
import {StyleSheet} from 'react-native'

export const Container = styled.View`
flex: 1;
justify-content: center;
align-items: center;
padding: ${RFValue(24)}px;
background-color: ${({theme}) => theme.colors.backgroundLight};
`

export const Styles = StyleSheet.create({
    flatlistStyle:{
        width: '98%',
    }
})

export const HeaderContainer = styled.View`
width: 100%;
align-items: center;
padding: ${RFValue(24)}px;
padding-bottom: 0;
margin-bottom: ${RFValue(24)}px;
`