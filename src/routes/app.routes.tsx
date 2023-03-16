import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { AvatarIcon } from 'components/AvatarIcon'
import { SvgXml } from 'react-native-svg'
import { Content } from 'screens/Content'
import { Home } from 'screens/Home'
import { NewOpportunities } from 'screens/NewOpportunities'
import { Profile } from 'screens/Profile'
import { Promotions } from 'screens/Promotions'
import { MyData } from 'screens/MyData'
import { useTheme } from 'styled-components'
import {
    bag,
    bagActive,
    book,
    bookActive,
    plus,
    plusActive,
    save,
    saveActive
} from '../assets/svgs'
import { Notifications } from 'screens/Notifications'
import { ContentDetails } from 'screens/ContentDetails'

export function AppRoutes() {

    const theme = useTheme()
    const TabNavigator = createBottomTabNavigator()
    const StackNavigator = createStackNavigator()

    const AvatarIconImage = 'https://images.unsplash.com/photo-1553514029-1318c9127859?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'

    const screensConfig = {
        headerShown: false,
        tabBarStyle: {
            backgroundColor: theme.colors.backgroundLight,
            height: 100,
            paddingLeft: 12,
            paddingRight: 12
        },
        tabBarLabelStyle: {
            display: 'none',
        },
    }

    const screens = [
        {
            name: 'Home',
            component: Home,
            options: screensConfig
        },
        {
            name: 'Oportunidades',
            component: NewOpportunities,
            options: screensConfig
        },
        {
            name: 'Conteúdo',
            component: Content,
            options: screensConfig
        },
        {
            name: 'Promoções',
            component: Promotions,
            options: screensConfig
        },
        {
            name: 'Perfil',
            component: Profile,
            options: screensConfig
        }
    ]

    function RenderTabsNavigation() {
        return (
            <TabNavigator.Navigator initialRouteName='Home'
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused }) => {
                        let currentElement;
                        if (route.name === 'Home') {
                            currentElement = focused
                                ? saveActive
                                : save
                        } else if (route.name === 'Conteúdo') {
                            currentElement = focused ? bookActive : book;
                        } else if (route.name === 'Promoções') {
                            currentElement = focused ? bagActive : bag;
                        } else if (route.name === 'Oportunidades') {
                            currentElement = focused ? plusActive : plus;
                        } else if (route.name === 'Perfil') {
                            currentElement = focused ?
                                <AvatarIcon imgUrl={AvatarIconImage} isActive /> :
                                <AvatarIcon imgUrl={AvatarIconImage} />
                        }
                        if (route.name !== 'Perfil') {
                            //@ts-ignore
                            return <SvgXml xml={currentElement} />
                        } else {
                            return currentElement
                        }
                    }
                }
                )}
            >
                {screens.map(screen => (
                    <TabNavigator.Screen
                        key={screen.name}
                        name={screen.name}
                        component={screen.component}
                        //@ts-ignore
                        options={screen.options}
                    />
                ))}
            </TabNavigator.Navigator>
        )
    }

    return (
        <NavigationContainer>
            <StackNavigator.Navigator
                initialRouteName='Home'
                screenOptions={{
                    headerShown: false
                }}
            >
                <StackNavigator.Screen name='Home' component={RenderTabsNavigation} />
                <StackNavigator.Screen name='Detalhes Perfil' component={Profile} />
                <StackNavigator.Screen name='Meus Dados' component={MyData} />
                <StackNavigator.Screen name='Notificações' component={Notifications} />
                <StackNavigator.Screen name='Detalhes conteúdo' component={ContentDetails} />
            </StackNavigator.Navigator>
        </NavigationContainer>
    )
}