import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Profile } from 'screens/Profile'

export function AppRoutes() {

    const TabNavigation = createBottomTabNavigator()

    return (
        <NavigationContainer>
            <TabNavigation.Navigator>
                <TabNavigation.Screen name='Perfil' component={Profile} />
            </TabNavigation.Navigator>
        </NavigationContainer>
    )
}