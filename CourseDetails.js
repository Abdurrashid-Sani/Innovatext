import React from 'react';
import { SafeAreaView, Text, Button, View, ScrollView, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import styles from './styles';

function CourseDetail() {
  const route = useRoute();
  const { course } = route.params;

  const handleRegister = () => {
    // Implement course registration logic here
    alert(`Registered for ${course.title}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.pageTitle}>{course.title}</Text>
        <Text style={styles.courseDescription}>This is the detailed description of {course.title}.</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.courseRating}>Rating: {course.rating}</Text>
        </View>
        <Text style={styles.courseDuration}>Duration: {course.duration}</Text>
        <Text style={styles.courseInstructor}>Instructor: {course.instructor}</Text>
        <Button title="Register" onPress={handleRegister} />

        <Text style={styles.sectionTitle}>Interactive Quizzes</Text>
        <View style={styles.quizContainer}>
          <TouchableOpacity style={styles.quizButton}>
            <Text>Start Quiz 1</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Student Reviews</Text>
        <View style={styles.reviewContainer}>
          <Text>John Doe: Great course!</Text>
          <Text>Jane Smith: Very informative.</Text>
        </View>

        <Text style={styles.sectionTitle}>Related Articles</Text>
        <View style={styles.articleContainer}>
          <Text>1. How AI is transforming businesses.</Text>
          <Text>2. Top marketing strategies for 2024.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default CourseDetail;
