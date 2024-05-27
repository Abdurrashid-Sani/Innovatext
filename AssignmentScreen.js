// AssignmentsScreen.js
import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const assignmentsData = [
  { id: '1', title: 'Assignment 1', deadline: 'May 30, 2024', status: 'Pending' },
  { id: '2', title: 'Assignment 2', deadline: 'June 5, 2024', status: 'Submitted' },
  // Add more assignments as needed
];

const AssignmentsScreen = ({ navigation }) => {
  const handleAssignmentSubmission = (assignmentId) => {
    // Logic to handle assignment submission
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.assignmentItem} onPress={() => navigation.navigate('AssignmentDetails', { assignmentId: item.id })}>
      <Text style={styles.assignmentTitle}>{item.title}</Text>
      <Text>Deadline: {item.deadline}</Text>
      <Text>Status: {item.status}</Text>
      {item.status === 'Pending' && (
        <TouchableOpacity style={styles.submitButton} onPress={() => handleAssignmentSubmission(item.id)}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Assignments</Text>
      <FlatList
        data={assignmentsData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  assignmentItem: {
    marginBottom: 20,
    padding: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  assignmentTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  submitButtonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default AssignmentsScreen;
