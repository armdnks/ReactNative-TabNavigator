import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { CustomTabBar } from '../components';

import { HomeScreen, CartScreen, SearchScreen } from '../screens';

const Tab = createBottomTabNavigator();

const TabNavigator = (props) => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ icon: 'home' }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{ icon: 'search1' }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{ icon: 'shoppingcart' }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    marginHorizontal: 20,
    marginBottom: 25,
    paddingHorizontal: 10,
    backgroundColor: '#ccc',
    height: 90,
    borderRadius: 20,
    elevation: 0,
  },
});

export default TabNavigator;
