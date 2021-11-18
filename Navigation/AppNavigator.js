import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import AuthScreen, {authScreenOptions} from '../Screens/User/AuthScreen';
import OTPScreen, {otpScreenOptions} from '../Screens/User/OTPScreen';

const AuthStack = createStackNavigator();

const AppNavigator = props => {
  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen
          name="Login"
          component={AuthScreen}
          options={authScreenOptions}
        />
        <AuthStack.Screen
          name="OTP"
          component={OTPScreen}
          options={otpScreenOptions}
        />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
