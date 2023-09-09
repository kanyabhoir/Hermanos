import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './android/app/src/Screens/Login';
import Registration from './android/app/src/Screens/Registration';
import Home from './android/app/src/Screens/Home';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import ProductDetail from './android/app/src/Screens/ProductDetail';
import ProductCard from './android/app/src/Screens/ProductCard';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="SignUp" component={Registration} />
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="productdetail" component={ProductDetail} />
          <Stack.Screen name="productcard" component={ProductCard} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
