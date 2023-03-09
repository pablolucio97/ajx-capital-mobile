import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'
import { StyleSheet } from 'react-native'

export const Container = styled.View`
width: 100%;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
height: ${RFValue(112)}px;
border-radius: ${RFValue(10)}px;
background-color: ${({ theme }) => theme.colors.backgroundLight};
elevation: 2;
padding: ${RFValue(24)}px;
`
export const TextContainer = styled.View`
margin: 0 ${RFValue(16)}px;
`

export const Avatar = styled.Image`
    width: ${RFValue(72)}px;
    height: ${RFValue(72)}px;
    border-radius: ${RFValue(36)}px;
`

export const Styles = StyleSheet.create({
    progressText: {
        color: '#000000',
        fontSize: RFValue(12),
        fontWeight: 'bold'
    }
})