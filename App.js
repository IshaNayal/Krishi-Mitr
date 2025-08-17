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
import SoilTester from './screens/tools/SoilTesterScreen';
import WeatherAssistantScreen from './screens/tools/WeatherAssistantScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} />
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Settings" component={SettingsScreen} options={{headerShown:false}}/>
        <Stack.Screen name="CropDoctor" component={CropDoctorScreen} options={{headerShown:false}} />
        <Stack.Screen name="SmartIrrigation" component={SmartIrrigationScreen} options={{headerShown:false}} />
        <Stack.Screen name="YieldPredictor" component={YieldPredictorScreen} options={{headerShown:false}} />
        <Stack.Screen name="SoilTesterScreen" component={SoilTester} options={{headerShown:false}}/>
        <Stack.Screen name="WeatherAssistant" component={WeatherAssistantScreen} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

