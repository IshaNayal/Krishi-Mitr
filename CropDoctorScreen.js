import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ImageBackground } from 'react-native';

export default function CropDoctorScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Crop Doctor</Text>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#df5252ff',
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
    color: '#ffffffff',
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
