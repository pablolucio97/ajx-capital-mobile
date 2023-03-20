import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import {getScreenWidth} from 'utils/layout'

export const Container = styled.View`
width: ${getScreenWidth()}px;
flex: 1;
align-items: center;
padding: ${RFValue(24)}px ${RFValue(16)}px;
`

export const ContentContainer = styled.ScrollView`
width: 100%;
`