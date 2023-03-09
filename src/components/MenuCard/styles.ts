import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import { StyleSheet } from 'react-native'

export const Container = styled.View`
width: 100%;
align-items: center;
border-radius: ${RFValue(10)}px;
background-color: ${({ theme }) => theme.colors.backgroundLight};
elevation: 2;
padding: ${RFValue(24)}px;
`

export const Divider = styled.View`
width: 100%;
height:  ${RFValue(1)}px;
background-color: #DFDFDF;
margin: ${RFValue(8)}px 0;
`
export const ContentContainer = styled.TouchableOpacity`
width: 100%;
flex-direction: column;
`

export const TextContainer = styled.View`
flex-direction: row;
`

export const DataContainer = styled.View`
flex-direction: row;
align-items: center;
height:  ${RFValue(40)}px;
justify-content: space-between;
`

export const NotificationContainer = styled.View`
`

export const NotificationBadge = styled.View`
width: ${RFValue(16)}px;
height: ${RFValue(16)}px;
border-radius: ${RFValue(8)}px;
background-color: #FF7474;
`

export const Text = styled.Text``

export const Styles = StyleSheet.create({
    textTitle: {
        marginLeft: RFValue(16),
        fontSize: RFValue(14),
        fontWeight: '600'
    }
})