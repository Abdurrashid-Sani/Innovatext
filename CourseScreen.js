// screens/CourseScreen.js
import React from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';

const courses = [
  { id: '1', title: 'Course 1', progress: '50%' },
  { id: '2', title: 'Course 2', progress: '30%' },
  // Add more courses as needed
];

const CourseScreen = ({ navigation }) => {
  const joinLiveSession = () => {
    // Implement logic to join a live session
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={courses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.courseItem}>
            <Text style={styles.courseTitle}>{item.title}</Text>
            <Text>Progress: {item.progress}</Text>
            <Button title="View Course" onPress={() => { /* Navigate to course details */ }} />
            <Button title="Join Live Session" onPress={joinLiveSession} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  courseItem: {
    marginBottom: 20,
    padding: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  courseTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default CourseScreen;
