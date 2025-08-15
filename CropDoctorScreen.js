//CropDoctorScreen.js
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ImageBackground } from 'react-native';

export default function CropDoctorScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Crop Doctor</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>Welcome to the Crop Doctor </Text>
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
    backgroundColor: '#06940bff',
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
    textAlign: 'center',
  },
});



