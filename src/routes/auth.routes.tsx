import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { InitialScreen } from 'screens/InitialScreen'
import { Login } from 'screens/Login'
import { SignUp } from 'screens/SignUp'

export function AuthRoutes() {

    const TabNavigation = createBottomTabNavigator()

    const screensConfig = {
        headerShown: false,
        tabBarStyle: {
            display: 'none'
        }

    }

    const screens = [
        {
            name: 'Tela Inicial',
            component: InitialScreen,
            options: screensConfig
        },
        {
            name: 'Cadastro',
            component: SignUp,
            options: screensConfig
        },
        {
            name: 'Login',
            component: Login,
            options: screensConfig
        },
    ]

    return (
        <NavigationContainer>
            <TabNavigation.Navigator initialRouteName='Tela Inicial'>
                {
                    screens.map(screen => (
                        <TabNavigation.Screen
                            key={screen.name}
                            name={screen.name}
                            component={screen.component}
                            //@ts-ignore
                            options={screen.options}
                        />
                    ))
                }
            </TabNavigation.Navigator>
        </NavigationContainer>
    )
}