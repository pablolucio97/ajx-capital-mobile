import { Dimensions } from 'react-native'

const getScreenWidth = () => {
    return Dimensions.get('screen').width
}


export { getScreenWidth }
