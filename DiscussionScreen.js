// screens/DiscussionScreen.js
import React from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';

const discussions = [
  { id: '1', title: 'Discussion 1', author: 'User 1', date: 'May 25, 2024', content: 'Lorem ipsum dolor sit amet.' },
  { id: '2', title: 'Discussion 2', author: 'User 2', date: 'May 26, 2024', content: 'Lorem ipsum dolor sit amet.' },
  // Add more discussions as needed
];

const DiscussionScreen = () => {
  return (
    <View style={styles.container}>
      <Button title="Create New Discussion" onPress={() => { /* Navigate to create discussion screen */ }} />
      <FlatList
        data={discussions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.discussionItem}>
            <Text style={styles.discussionTitle}>{item.title}</Text>
            <Text>Author: {item.author}</Text>
            <Text>Date: {item.date}</Text>
            <Text>{item.content}</Text>
            <Button title="Reply" onPress={() => { /* Navigate to reply screen */ }} />
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
  discussionItem: {
    marginBottom: 20,
    padding: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  discussionTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default DiscussionScreen;
