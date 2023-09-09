import 'react-native-gesture-handler';
import {
  StyleSheet,

} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Registration from './Screens/Registration';
import Login from './Screens/Login';
const Stack = createNativeStackNavigator();

const Routers = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={"SignUp"}>
        <Stack.Screen name="SignUp" component={Registration} />
        <Stack.Screen name="login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routers;

const styles = StyleSheet.create({});

