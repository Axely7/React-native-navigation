import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {MenuLateral} from './src/navigator/MenuLateral';
import {Tabs} from './src/navigator/Tabs';
import {AuthProvider} from './src/context/AuthContext';
// import {MenuLateralBasico} from './src/navigator/MenuLateralBasico';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        {/* <StackNavigator /> */}
        {/* <MenuLateralBasico /> */}
        <MenuLateral />
        {/* <Tabs /> */}
      </AppState>
    </NavigationContainer>
  );
};

const AppState = ({children}: any) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default App;
