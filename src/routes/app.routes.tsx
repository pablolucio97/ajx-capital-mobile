import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { AvatarIcon } from 'components/AvatarIcon'
import { SvgXml } from 'react-native-svg'
import { Content } from 'screens/Content'
import { Home } from 'screens/Home'
import { NewOpportunities } from 'screens/NewOpportunities'
import { Profile } from 'screens/Profile'
import { Promotions } from 'screens/Promotions'
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

export function AppRoutes() {

    const theme = useTheme()
    const TabNavigation = createBottomTabNavigator()

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
        },
    ]

    return (
        <NavigationContainer>
            <TabNavigation.Navigator initialRouteName='Home'
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
                    <TabNavigation.Screen
                        key={screen.name}
                        name={screen.name}
                        component={screen.component}
                        //@ts-ignore
                        options={screen.options}
                    />
                ))}
            </TabNavigation.Navigator>
        </NavigationContainer>
    )
}