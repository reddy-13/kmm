import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';

// import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {createAppContainer} from 'react-navigation';

const appnavigator = createStackNavigator(
  {
    Login: {screen: LoginScreen},
    HomeScreen: {screen: HomeScreen},
  },
  {
    //launcher screeen
    initialRouteName: 'HomeScreen',
  },
);

const App = createAppContainer(appnavigator);
export default App;
