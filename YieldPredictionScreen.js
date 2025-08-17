//YieldPredictionScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';

export default function YieldPredictorScreen() {
  const [area, setArea] = useState('');
  const [rainfall, setRainfall] = useState('');
  const [fertilizer, setFertilizer] = useState('');
  const [prediction, setPrediction] = useState(null);

  const handlePredict = () => {
    if (!area || !rainfall || !fertilizer) {
      Alert.alert('Missing Data', 'Please enter all fields');
      return;
    }

    // Dummy prediction logic (replace with API call to ML model)
    const result =
      parseFloat(area) * 0.8 +
      parseFloat(rainfall) * 0.3 +
      parseFloat(fertilizer) * 0.5;

    setPrediction(result.toFixed(2));
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Yield Predictor</Text>
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.text}>Enter your farm details:</Text>

        <TextInput
          style={styles.input}
          placeholder="Farm Area (in acres)"
          keyboardType="numeric"
          value={area}
          onChangeText={setArea}
        />
        <TextInput
          style={styles.input}
          placeholder="Rainfall (mm)"
          keyboardType="numeric"
          value={rainfall}
          onChangeText={setRainfall}
        />
        <TextInput
          style={styles.input}
          placeholder="Fertilizer Used (kg)"
          keyboardType="numeric"
          value={fertilizer}
          onChangeText={setFertilizer}
        />

        <TouchableOpacity style={styles.button} onPress={handlePredict}>
          <Text style={styles.buttonText}>Predict Yield</Text>
        </TouchableOpacity>

        {prediction && (
          <View style={styles.resultBox}>
            <Text style={styles.resultText}>🌾 Predicted Yield: {prediction} tons</Text>
          </View>
        )}
      </ScrollView>
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
    backgroundColor: '#FBC02D',
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
    flexGrow: 1,
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
  input: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    padding: 12,
    marginVertical: 8,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  button: {
    marginTop: 15,
    padding: 15,
    borderRadius: 12,
    width: '70%',
    backgroundColor: '#0288D1',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  resultBox: {
    marginTop: 20,
    padding: 15,
    borderRadius: 12,
    backgroundColor: '#fff3cd',
    borderWidth: 1,
    borderColor: '#ffeeba',
    width: '90%',
    alignItems: 'center',
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#795548',
  },
}); 
