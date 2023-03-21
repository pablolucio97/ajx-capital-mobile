import { StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import theme from 'themes/theme'

export const Container = styled.View`
width: 98%;
min-height: ${RFValue(232)}px;
border-radius: ${RFValue(10)}px;
padding: ${RFValue(16)}px ${RFValue(24)}px;
margin: ${RFValue(8)}px auto;
background-color: ${({ theme }) => theme.colors.backgroundLight};
elevation: 2;
`

export const SelectPickerContainer = styled.View`
width: ${RFValue(160)}px;
justify-content: center;
align-items: center;
`
export const SelectContainer = styled.View`
width: 100%;
flex-direction: row;
margin-bottom: ${RFValue(40)}px;
`

export const LastDataLegendContainer = styled.View`
width: 100%;
flex-direction: row;
padding-bottom: ${RFValue(12)}px;
margin-top: ${RFValue(12)}px;
`

export const DataLegendContainer = styled(LastDataLegendContainer)`
border-bottom-color:  ${({ theme }) => theme.colors.background};
border-bottom-width: ${RFValue(1)}px;
`

export const InvestmentLegendText = styled.Text`
font-size: ${RFValue(14)}px;
font-family: ${({ theme }) => theme.fonts.primary_700};
color: ${({ theme }) => theme.colors.textDark};
`

export const Text = styled.Text`
font-size: ${RFValue(14)}px;
font-family: ${({ theme }) => theme.fonts.primary_400};
color: ${({ theme }) => theme.colors.textDark};
`

export const TextDataContainer = styled.View`
width: 100%;
flex-direction: row;
justify-content: flex-end;
align-items: center;
`

export const TextLegendContainer = styled.View`
width: 50%;
flex-direction: row;
justify-content: flex-start;
align-items: center;
`

const LegendBoxContainerBase = styled.View`
width: ${RFValue(24)}px;
height: ${RFValue(24)}px;
border-radius: ${RFValue(5)}px;
margin-right: ${RFValue(8)}px;
`

export const FirstLegendBoxContainer = styled(LegendBoxContainerBase)`
background-color: #3AC6F4;
`
export const SecondLegendBoxContainer = styled(LegendBoxContainerBase)`
background-color: #753AF4;
`
export const ThirdLegendBoxContainer = styled(LegendBoxContainerBase)`
background-color: #38D462;
`
export const Styles = StyleSheet.create({
    textData: {
        marginRight: RFValue(48)
    },
    buttonTextStyle: {
        color: theme.colors.textDark,
        fontSize: RFValue(14),
        fontFamily: theme.fonts.primary_300
    },
    dropdownStyle: {
        backgroundColor: theme.colors.backgroundLight,
        alignSelf: 'center',
        textAlign: 'center',
        borderRadius: RFValue(10),
    },
    buttonStyle: {
        width: RFValue(160),
        height: RFValue(32),
        backgroundColor: theme.colors.backgroundLight,
        borderRadius: RFValue(10),
        marginRight: RFValue(40),
        borderWidth: 1,
        borderColor: theme.colors.background,
    },
})