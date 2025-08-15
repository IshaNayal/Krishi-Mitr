import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function MenuBar({ navigation }) {
    return (
        <View style={styles.menu}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CropDoctor')}>
                <Text style={styles.text}>Crop Doctor</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SmartIrrigation')}>
                <Text style={styles.text}>Smart Irrigation</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('YieldPredictor')}>
                <Text style={styles.text}>Yield Predictor</Text>
            </TouchableOpacity>
            

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profile')}>
                <Text style={styles.text}>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Settings')}>
                <Text style={styles.text}>Settings</Text>
            </TouchableOpacity>

            


        </View>
    );
}

const styles = StyleSheet.create({
    menu: { flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'center' },
    button: { backgroundColor: '#4CAF50', margin: 20, padding: 10, borderRadius: 5 },
    text: { color: '#000000ff' }
}); 
