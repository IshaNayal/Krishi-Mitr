import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/profile/ProfileScreen';
import SettingsScreen from './screens/settings/SettingsScreen';
import CropDoctorScreen from './screens/tools/CropDoctorScreen';
import SmartIrrigationScreen from './screens/tools/SmartIrrigationScreen';
import YieldPredictorScreen from './screens/tools/YieldPredictorScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="CropDoctor" component={CropDoctorScreen} />
        <Stack.Screen name="SmartIrrigation" component={SmartIrrigationScreen} />
        <Stack.Screen name="YieldPredictor" component={YieldPredictorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
