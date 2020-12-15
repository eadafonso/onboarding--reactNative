import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OnBoardScreen from './screens/OnBoard';
import LoginScreen from './screens/Login';

const AppStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        headerMode="none"
      >

        <AppStack.Screen name="onBoard" component={OnBoardScreen} />
        <AppStack.Screen name="Login" component={LoginScreen} />

      </AppStack.Navigator>
    </NavigationContainer>
  )
}

export default App;