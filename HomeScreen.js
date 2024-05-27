// screens/HomeScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = ({ navigation }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Implement logic to toggle dark mode
  };

  return (
    <View style={[styles.container, isDarkMode && styles.darkMode]}>
      <View style={styles.header}>
        <Image source={require("./images/ENT2.jpg")} style={styles.profileImage} />
        <Text style={styles.greeting}>Welcome, [User Name]!</Text>
        <Icon name="bell" size={24} color="black" onPress={() => {/* Navigate to notifications */}} />
        <Button title={isDarkMode ? "Light Mode" : "Dark Mode"} onPress={toggleDarkMode} />
      </View>
      <View style={styles.content}>
        <Button title="Courses" onPress={() => navigation.navigate('Courses')} />
        <Button title="Assignments" onPress={() => navigation.navigate('Assignments')} />
        <Button title="Discussions" onPress={() => navigation.navigate('Discussions')} />
        <Button title="Resources" onPress={() => navigation.navigate('Resources')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff', // Default background color
  },
  darkMode: {
    backgroundColor: '#333333', // Dark mode background color
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  greeting: {
    fontSize: 20,
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default HomeScreen;
