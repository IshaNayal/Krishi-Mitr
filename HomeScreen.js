import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  ScrollView, 
  ImageBackground, 
  Alert, 
  TouchableOpacity 
} from 'react-native';
import MenuBar from '../components/menu/MenuBar';

export default function HomeScreen({ navigation }) {
  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Do you really want to logout?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Yes",
          style: "destructive",
          onPress: () => {
            navigation.reset({
              index: 0,
              routes: [{ name: "Login" }],
            });
          },
        },
      ]
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require('../assets/farm2.jpg')}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>Krishi-Mitr</Text>
            <Text style={styles.subtitle}>Your AI Partner in Every Crop Decision</Text>
          </View>

          {/* Menu Bar */}
          <ScrollView contentContainerStyle={styles.menuWrapper}>
            <MenuBar navigation={navigation} />
          </ScrollView>

          {/* Logout Button at Bottom Right */}
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
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
    backgroundColor: 'rgba(255, 255, 255, 0)', 
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 20,
    backgroundColor: '#4CAF50cc',
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
    marginBottom: 10,
  },
  menuWrapper: {
    padding: 20,
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  logoutButton: {
    position: 'absolute',
    bottom: 35,
    right: 20,
    backgroundColor: '#000000ff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    elevation: 4, // shadow for Android
  },
  logoutText: {
    fontSize: 14,
    color: '#ff0000ff',
    fontWeight: '600',
  },
});


