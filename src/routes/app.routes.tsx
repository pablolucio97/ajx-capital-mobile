import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from 'screens/Home'

export function AppRoutes() {

    const TabNavigation = createBottomTabNavigator()

    return (
        <NavigationContainer>
            <TabNavigation.Navigator>
                <TabNavigation.Screen name='Home' component={Home} />
            </TabNavigation.Navigator>
        </NavigationContainer>
    )
}