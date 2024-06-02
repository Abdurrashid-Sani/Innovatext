import React, { useState } from 'react';
import { SafeAreaView, StatusBar, ScrollView, Text, TouchableOpacity, View, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';

function Explore() {
  const [searchQuery, setSearchQuery] = useState('');
  const [bookmarked, setBookmarked] = useState([]);
  const categories = [
    { name: 'Business', icon: 'briefcase-outline' },
    { name: 'Technology', icon: 'laptop' },
    { name: 'Marketing', icon: 'bullhorn-outline' },
    { name: 'Design', icon: 'palette-outline' },
  ];
  const featuredCourses = [
    { id: '1', title: 'Advanced Business Strategies', category: 'Business', rating: 4.5, duration: '3h' },
    { id: '2', title: 'Intro to AI', category: 'Technology', rating: 4.7, duration: '4h' },
  ];
  const navigation = useNavigation();

  const handleSearch = (text) => {
    setSearchQuery(text);
    // Implement search logic
  };

  const handleBookmark = (courseId) => {
    setBookmarked((prev) => {
      if (prev.includes(courseId)) {
        return prev.filter((id) => id !== courseId);
      } else {
        return [...prev, courseId];
      }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.pageTitle}>Explore Courses</Text>
      
      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search courses..."
        value={searchQuery}
        onChangeText={handleSearch}
      />

      {/* Featured Courses */}
      <Text style={styles.sectionTitle}>Featured Courses</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.featuredContainer}>
        {featuredCourses.map((course, index) => (
          <TouchableOpacity
            key={index}
            style={styles.featuredCard}
            onPress={() => navigation.navigate('CourseDetail', { course })}
          >
            <Text style={styles.featuredTitle}>{course.title}</Text>
            <Text style={styles.featuredCategory}>{course.category}</Text>
            <Text style={styles.featuredDuration}>{course.duration}</Text>
            <View style={styles.ratingContainer}>
              <MaterialCommunityIcons name="star" size={20} color="#FFD700" />
              <Text style={styles.courseRating}>{course.rating}</Text>
            </View>
            <TouchableOpacity onPress={() => handleBookmark(course.id)}>
              <MaterialCommunityIcons
                name={bookmarked.includes(course.id) ? 'bookmark' : 'bookmark-outline'}
                size={24}
                color="#000"
              />
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Categories */}
      <Text style={styles.sectionTitle}>Categories</Text>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.categoriesContainer}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            style={styles.categoryCard}
            onPress={() => navigation.navigate('CourseList', { category: category.name })}
          >
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons name={category.icon} size={24} color="#000" />
            </View>
            <Text style={styles.categoryText}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Notifications and User-Specific Recommendations */}
      <Text style={styles.sectionTitle}>Notifications</Text>
      <ScrollView style={styles.notificationsContainer}>
        <Text style={styles.notificationText}>New course on Advanced AI available now!</Text>
        <Text style={styles.notificationText}>Don't miss out on our Marketing Strategies Webinar next week!</Text>
      </ScrollView>

      <Text style={styles.sectionTitle}>Recommended for You</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.recommendedContainer}>
        {/* Add recommended courses based on user profile */}
      </ScrollView>
    </SafeAreaView>
  );
}

export default Explore;
