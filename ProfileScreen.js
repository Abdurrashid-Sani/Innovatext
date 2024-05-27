import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  const user = {
    name: 'Abdurrashid Sani',
    email: 'abdurrashidsanibng@gmail.com',
    avatar: require('./images/best.png'), // Replace with actual avatar image
    achievements: 30, // Replace with actual achievements count
  };

  return (
    <View style={styles.container}>
      <Image source={user.avatar} style={styles.avatar} />
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>
      <Text style={styles.achievements}>Achievements: {user.achievements}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
    marginBottom: 20,
  },
  achievements: {
    fontSize: 16,
  },
});

export default ProfileScreen;
