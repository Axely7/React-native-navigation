import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {StackNavigator} from './StackNavigator';
import {SettingsScreen} from '../screens/SettingsScreen';
import {useWindowDimensions} from 'react-native';

const Drawer = createDrawerNavigator();

export const MenuLateralBasico = () => {
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      useLegacyImplementation={true}
      screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front',
        headerShown: width >= 768 ? false : true,
      }}
      // screenOptions={{drawerPosition: 'right'}}
    >
      <Drawer.Screen
        name="StackNavigator"
        options={{title: 'Home'}}
        component={StackNavigator}
      />
      <Drawer.Screen
        name="SettingsScreen"
        options={{title: 'Settings'}}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
};
