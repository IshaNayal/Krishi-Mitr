// DiagnosisScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function DiagnosisScreen() {
  const [image, setImage] = useState(null);

  // 📷 Open Camera
  const openCamera = async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    if (!permission.granted) {
      alert("Camera permission is required!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  // 🖼 Open Gallery
  const openGallery = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      alert("Gallery permission is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Plant Diagnosis</Text>
      </View>

      {/* Options */}
      <View style={styles.content}>
        <Text style={styles.text}>Choose an option to diagnose your crop:</Text>

        <TouchableOpacity style={styles.button} onPress={openCamera}>
          <Text style={styles.buttonText}>Take a Photo</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={openGallery}>
          <Text style={styles.buttonText}>Upload from Gallery</Text>
        </TouchableOpacity>

        {image && (
          <Image source={{ uri: image }} style={{ width: 250, height: 250, marginTop: 20, borderRadius: 12 }} />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#EFEFEF' },
  header: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: '#2E7D32',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    alignItems: 'center',
    elevation: 4,
  },
  title: { fontSize: 26, fontWeight: '700', color: '#fff', textAlign: 'center' },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 },
  text: { fontSize: 18, color: '#444', textAlign: 'center', marginBottom: 40 },
  button: {
    backgroundColor: '#2E7D32',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginVertical: 12,
    elevation: 3,
  },
  buttonText: { fontSize: 18, color: '#fff', fontWeight: '600', textAlign: 'center' },
});
