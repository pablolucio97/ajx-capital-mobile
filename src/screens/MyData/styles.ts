import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'
import { StyleSheet } from 'react-native'
import { getScreenWidth } from 'utils/layout'

export const TouchableContainer = styled.TouchableWithoutFeedback`
`

export const Container = styled.View`
width: ${getScreenWidth()}px;
flex: 1;
background-color: ${({ theme }) => theme.colors.backgroundLight};
`

export const ContentContainer = styled.ScrollView`
padding-top: ${RFValue(24)}px;
`

export const TitleContainer = styled.View`
padding: 0 ${RFValue(24)}px;
`
export const LogoContainer = styled.View`
align-items: center;
`

export const HeaderContainer = styled.View`
align-items: center;
padding: ${RFValue(24)}px;
padding-bottom: 0;
margin: ${RFValue(24)}px 0;
`

export const FormContainer = styled.View`
align-items: center;
padding: ${RFValue(24)}px;
`

export const UploadDocumentButton = styled.TouchableOpacity`
width: 100%;
height: ${RFValue(150)}px;
justify-content: center;
align-items: center;
border-radius: ${RFValue(20)}px;
border-color: ${({ theme }) => theme.colors.placeholder};
background-color: ${({ theme }) => theme.colors.background};
border-width: ${RFValue(1)}px;
border-style: dashed;
`

export const UploadDocumentButtonText = styled.Text`
font-size: ${RFValue(12)}px;
font-family: ${({ theme }) => theme.fonts.primary_300};
color: ${({ theme }) => theme.colors.placeholder};
`

export const DocumentsContainer = styled.View`
padding: ${RFValue(24)}px;
`

export const DocumentsList = styled.FlatList`
padding-bottom: ${RFValue(24)}px;

`


export const Styles = StyleSheet.create({
    headerNavigation: {
        marginBottom: RFValue(24)
    },
    text: {
        marginTop: RFValue(8),
        marginBottom: RFValue(8),
        textAlign: 'center'
    },
    documentListTitle:{
        marginBottom: RFValue(16),
        color: 'red'
    }
})

