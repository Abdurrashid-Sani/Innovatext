// ResourceScreen.js
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ResourceScreen = ({ navigation }) => {
  const handleDownload = (resource) => {
    // Logic to download the resource
  };

  const handleBookmark = (resource) => {
    // Logic to bookmark the resource
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resources</Text>
      <Button title="Download Resource" onPress={() => handleDownload(resource)} />
      <Button title="Bookmark Resource" onPress={() => handleBookmark(resource)} />
      {/* Add list of resources with download and bookmark options */}
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

export default ResourceScreen;
