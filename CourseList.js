import React, { useState } from 'react';
import { SafeAreaView, Text, FlatList, TouchableOpacity, View } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';

function CourseList() {
  const route = useRoute();
  const { category } = route.params;
  const navigation = useNavigation();

  const courses = [
    { id: '1', title: 'Advanced Business Strategies', rating: 4.5, duration: '3h', instructor: 'John Doe' },
    { id: '2', title: 'Intro to AI', rating: 4.7, duration: '4h', instructor: 'Jane Smith' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.pageTitle}>{category} Courses</Text>
      <FlatList
        data={courses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.courseCard}
            onPress={() => navigation.navigate('CourseDetail', { course: item })}
          >
            <Text style={styles.courseTitle}>{item.title}</Text>
            <View style={styles.ratingContainer}>
              <MaterialCommunityIcons name="star" size={20} color="#FFD700" />
              <Text style={styles.courseRating}>{item.rating}</Text>
            </View>
            <Text style={styles.courseDuration}>{item.duration}</Text>
            <Text style={styles.courseInstructor}>{item.instructor}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

export default CourseList;
