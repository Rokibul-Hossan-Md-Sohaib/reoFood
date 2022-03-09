/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {

  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import COLORS from './src/consts/colors';
import BottomNavigator from './src/views/navigation/BottomNavigator';
import DetailsScreen from './src/views/screens/DetailsScreen';
import HomeScreen from './src/views/screens/HomeScreen';
import onBoardScreen from './src/views/screens/onBoardScreen';


const Stack = createNativeStackNavigator();

const App = () => {
  const options = {
    header: () => null
  }

  return (
    <>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#00BCD4" translucent={true} />

        <Stack.Navigator>
          <Stack.Screen name="BoardScreen" component={onBoardScreen}
            options={options}
          />

          <Stack.Screen name="Home" component={BottomNavigator}
            options={options}
          />
          <Stack.Screen name="DetailsScreen" component={DetailsScreen}
            options={options}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
