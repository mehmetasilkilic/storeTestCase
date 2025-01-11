import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CheckIcon} from 'native-base';

// Types
import {RootTabParamList} from './types';

// Screens
import {HomeScreen} from '../screens/Home';
import {MiniScreen} from '../screens/Mini';
import {GroupShoppingScreen} from '../screens/GroupShopping';
import {CartScreen} from '../screens/Cart';
import {ProfileScreen} from '../screens/Profile';

const Tab = createBottomTabNavigator<RootTabParamList>();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: () => <CheckIcon />,
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: '#8E8E93',
        })}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Mini"
          component={MiniScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="GroupShopping"
          component={GroupShoppingScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
