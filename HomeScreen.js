import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, ImageBackground } from 'react-native';
import MenuBar from '../components/menu/MenuBar';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require('../assets/farm2.jpg')} // replace with your background image
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <View style={styles.header}>
            <Text style={styles.title}>Krishi-Mitr</Text>
            <Text style={styles.subtitle}>Your AI Partner in Every Crop Decision</Text>
          </View>

          <ScrollView contentContainerStyle={styles.menuWrapper}>
            <MenuBar navigation={navigation} />
          </ScrollView>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0)', // semi-transparent overlay
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 20,
    backgroundColor: '#4CAF50cc', // slightly transparent green
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 16,
    color: '#e0f2f1',
    textAlign: 'center',
  },
  menuWrapper: {
    padding: 20,
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
