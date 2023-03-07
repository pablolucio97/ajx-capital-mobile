import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Login } from 'screens/Login'
import { InitialScreen } from 'screens/InitialScreen'
import { SignUp } from 'screens/SignUp'

export function AuthRoutes() {

    const TabNavigation = createBottomTabNavigator()

    return (
        <NavigationContainer>
            <TabNavigation.Navigator initialRouteName='Tela Inicial'>
                <TabNavigation.Screen name='Tela Inicial' component={InitialScreen} />
                <TabNavigation.Screen name='Login' component={Login} />
                <TabNavigation.Screen name='Cadastro' component={SignUp} />
            </TabNavigation.Navigator>
        </NavigationContainer>
    )
}