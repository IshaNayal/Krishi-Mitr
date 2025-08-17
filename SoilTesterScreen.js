//SoilTesterScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';

export default function SoilTester() {
  const [nitrogen, setNitrogen] = useState('');
  const [phosphorus, setPhosphorus] = useState('');
  const [potassium, setPotassium] = useState('');
  const [result, setResult] = useState('');

  // Dummy rule-based logic (replace with ML API later)
  const suggestCrop = () => {
    const N = parseInt(nitrogen);
    const P = parseInt(phosphorus);
    const K = parseInt(potassium);

    if (N > 100 && P < 50) {
      setResult("🌾 Suggested Crop: Rice");
    } else if (N < 50 && P > 60) {
      setResult("🌿 Suggested Crop: Wheat");
    } else if (K > 70) {
      setResult("🌽 Suggested Crop: Maize");
    } else {
      setResult("🤔 Try: Cotton / Sugarcane");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Soil Tester</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.label}>Enter Soil NPK Values:</Text>

        <TextInput
          style={styles.input}
          placeholder="Nitrogen (N)"
          keyboardType="numeric"
          value={nitrogen}
          onChangeText={setNitrogen}
        />
        <TextInput
          style={styles.input}
          placeholder="Phosphorus (P)"
          keyboardType="numeric"
          value={phosphorus}
          onChangeText={setPhosphorus}
        />
        <TextInput
          style={styles.input}
          placeholder="Potassium (K)"
          keyboardType="numeric"
          value={potassium}
          onChangeText={setPotassium}
        />

        <TouchableOpacity style={styles.button} onPress={suggestCrop}>
          <Text style={styles.buttonText}>Suggest Crop</Text>
        </TouchableOpacity>

        {result ? <Text style={styles.result}>{result}</Text> : null}
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
    backgroundColor: '#6D4C41',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333',
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  result: {
    fontSize: 20,
    marginTop: 20,
    fontWeight: '600',
    color: '#222',
    textAlign: 'center',
  },
});




