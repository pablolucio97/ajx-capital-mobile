import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components'
import defaultTheme from './src/themes/theme'

import {
  useFonts,
  OpenSans_300Light,
  OpenSans_400Regular,
  OpenSans_500Medium,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
  OpenSans_800ExtraBold,
} from '@expo-google-fonts/open-sans'

export default function App() {

  let [fontsLoaded] = useFonts({
    OpenSans_300Light,
    OpenSans_400Regular,
    OpenSans_500Medium,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
    OpenSans_800ExtraBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <ThemeProvider theme={defaultTheme}>
        <View>
          <StatusBar style="auto" />
        </View>
      </ThemeProvider>
    );
  }



}


