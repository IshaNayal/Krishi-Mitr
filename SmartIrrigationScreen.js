// SmartIrrigationScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';

export default function SmartIrrigationScreen() {
  const [moisture, setMoisture] = useState(45); // dummy %
  const [pumpOn, setPumpOn] = useState(false);
  const [autoMode, setAutoMode] = useState(true);

  // Simulate live sensor updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMoisture(Math.floor(Math.random() * 100)); // random value for now
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Smart Irrigation</Text>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.text}>Soil Moisture: {moisture}%</Text>
        <Text style={styles.text}>
          Pump Status: {pumpOn ? '💧 ON' : '❌ OFF'}
        </Text>
        <Text style={styles.text}>
          Mode: {autoMode ? '🤖 Auto' : '👤 Manual'}
        </Text>

        {/* Buttons */}
        <TouchableOpacity
          style={[styles.button, { backgroundColor: pumpOn ? '#e53935' : '#43a047' }]}
          onPress={() => setPumpOn(!pumpOn)}
        >
          <Text style={styles.buttonText}>{pumpOn ? 'Stop Pump' : 'Start Pump'}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: autoMode ? '#ff9800' : '#0288D1' }]}
          onPress={() => setAutoMode(!autoMode)}
        >
          <Text style={styles.buttonText}>
            {autoMode ? 'Switch to Manual' : 'Enable Auto Mode'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b4aaaaff',
  },
  header: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: '#0288D1',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 18,
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  button: {
    marginTop: 15,
    padding: 15,
    borderRadius: 12,
    width: '70%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});
