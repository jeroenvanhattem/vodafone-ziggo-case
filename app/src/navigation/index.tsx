import { useTheme } from '@/providers/theme';
import { Favorites } from '@/screens/Favorites';
import { Home } from '@/screens/Home';
import { Search } from '@/screens/Search';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createRef } from 'react';
import {
  Home as HomeIcon,
  Heart,
  Search as SearchIcon,
} from 'react-native-feather';

const Tab = createBottomTabNavigator({
  screens: {
    Home: Home,
    Favorites: Favorites,
    Search: Search,
  },
});

export const navigationRef = createRef<any>();

export function navigate(name: any, params?: any) {
  navigationRef.current?.navigate(name, params);
}

export const Navigation = () => {
  const { colors } = useTheme();
  const getIcon = (name: string, focused: boolean) => {
    const icons = {
      Home: <HomeIcon color={focused ? colors[100] : colors[300]} />,
      Favorites: <Heart color={focused ? colors[100] : colors[300]} />,
      Search: <SearchIcon color={focused ? colors[100] : colors[300]} />,
    };
    if (!name || !icons[name as keyof typeof icons]) {
      return null;
    }
    return icons[name as keyof typeof icons] || null;
  };

  return (
    <NavigationContainer ref={navigationRef}>
      <Tab.Navigator
        screenOptions={({ route }) => {
          return {
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              return getIcon(route.name, focused);
            },
            tabBarShowLabel: false,
            tabBarStyle: {
              backgroundColor: colors[800],
              // borderTopWidth: 0,
              // height: 60,
            },
          };
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Favorites" component={Favorites} />
        <Tab.Screen name="Search" component={Search} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
