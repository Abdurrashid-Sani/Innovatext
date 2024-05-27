// SettingsScreen.js
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const SettingsScreen = ({ navigation }) => {
  const handleChangePassword = () => {
    // Logic to navigate to change password screen
  };

  const handleNotificationSettings = () => {
    // Logic to navigate to notification settings screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Button title="Change Password" onPress={handleChangePassword} />
      <Button title="Notification Settings" onPress={handleNotificationSettings} />
      {/* Add additional settings options */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default SettingsScreen;
