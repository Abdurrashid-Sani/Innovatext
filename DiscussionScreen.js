import React, { useState, useEffect } from 'react';
import { View, StatusBar, StyleSheet, ScrollView, Image, Text, TouchableOpacity, TextInput } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Icon } from 'react-native-elements';

const Tab = createBottomTabNavigator();

function CourseComponent({ course, navigation }) {
  return (
    <View style={styles.courseContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('CourseDetails', { course })}>
        <Image style={styles.courseThumbnail} source={{ uri: course.thumbnail }} />
        <Text style={styles.courseDuration}>{course.duration}</Text>
      </TouchableOpacity>
      <View style={styles.courseInfo}>
        <Image style={styles.instructorImage} source={{ uri: course.instructorImg }} />
        <View style={styles.courseTextContainer}>
          <Text style={styles.courseTitle}>{course.title}</Text>
          <Text style={styles.courseDetails}>
            {`${course.instructor} • ${course.views} • ${course.uploaded}`}
          </Text>
        </View>
        <Icon name="more-vert" color="#444" />
      </View>
    </View>
  );
}

function Courses({ navigation }) {
  const [courses] = useState([
    {
      title: 'How to Start a Business with No Money',
      instructor: 'John Doe',
      views: '2k views',
      uploaded: '2 weeks ago',
      instructorImg: 'https://example.com/instructor1.jpg',
      thumbnail: 'https://example.com/course1.jpg',
      duration: '2:30',
      description: 'Learn how to start a business with no capital investment...',
    },
    {
      title: 'Marketing Strategies for Entrepreneurs',
      instructor: 'Jane Smith',
      views: '1.5k views',
      uploaded: '1 month ago',
      instructorImg: 'https://example.com/instructor2.jpg',
      thumbnail: 'https://example.com/course2.jpg',
      duration: '1:15',
      description: 'Discover effective marketing strategies to grow your business...',
    },
    // Add more courses if needed
  ]);

  return (
    <ScrollView style={styles.scrollView}>
      {courses.map((course) => (
        <CourseComponent course={course} key={course.title} navigation={navigation} />
      ))}
      <View style={styles.scrollBottomSpacing}></View>
    </ScrollView>
  );
}

function CourseDetails({ route }) {
  const { course } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.courseDetailsThumbnail} source={{ uri: course.thumbnail }} />
      <View style={styles.courseDetailsContainer}>
        <Text style={styles.courseDetailsTitle}>{course.title}</Text>
        <Text style={styles.courseDetailsDescription}>{course.description}</Text>
        <Text style={styles.courseDetailsInfo}>Instructor: {course.instructor}</Text>
        <Text style={styles.courseDetailsInfo}>Duration: {course.duration}</Text>
        <Text style={styles.courseDetailsInfo}>Views: {course.views}</Text>
        <Text style={styles.courseDetailsInfo}>Uploaded: {course.uploaded}</Text>
      </View>
    </ScrollView>
  );
}

function Mentors({ navigation }) {
  const [mentors] = useState([
    {
      name: 'John Doe',
      bio: 'Expert in Startup Funding and Investment',
      image: 'https://example.com/mentor1.jpg',
    },
    {
      name: 'Jane Smith',
      bio: 'Marketing Guru with 10 years of experience',
      image: 'https://example.com/mentor2.jpg',
    },
    // Add more mentors if needed
  ]);

  return (
    <ScrollView style={styles.scrollView}>
      {mentors.map((mentor) => (
        <TouchableOpacity key={mentor.name} onPress={() => navigation.navigate('MentorProfile', { mentor })}>
          <View style={styles.mentorContainer}>
            <Image style={styles.mentorImage} source={{ uri: mentor.image }} />
            <View style={styles.mentorTextContainer}>
              <Text style={styles.mentorName}>{mentor.name}</Text>
              <Text style={styles.mentorBio}>{mentor.bio}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
      <View style={styles.scrollBottomSpacing}></View>
    </ScrollView>
  );
}

function MentorProfile({ route }) {
  const { mentor } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.mentorProfileImage} source={{ uri: mentor.image }} />
      <View style={styles.mentorProfileContainer}>
        <Text style={styles.mentorProfileName}>{mentor.name}</Text>
        <Text style={styles.mentorProfileBio}>{mentor.bio}</Text>
        <TouchableOpacity style={styles.bookSessionButton}>
          <Text style={styles.bookSessionButtonText}>Book a Session</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

function Community() {
  return (
    <View style={styles.container}>
      <Text style={styles.screenNameText}>Community</Text>
      {/* Add discussion forum functionality here */}
    </View>
  );
}

function ProgressTracking() {
  return (
    <View style={styles.container}>
      <Text style={styles.screenNameText}>Progress Tracking</Text>
      {/* Add progress tracking functionality here */}
    </View>
  );
}

function Quizzes() {
  return (
    <View style={styles.container}>
      <Text style={styles.screenNameText}>Quizzes</Text>
      {/* Add quizzes functionality here */}
    </View>
  );
}

function CustomHeader({ isSearchActive, setSearchActive }) {
  const userImage = 'https://example.com/user.jpg'; // Replace with your user image URL
  const userName = 'User Name'; // Replace with the actual user name
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <View style={styles.headerContainer}>
      {isSearchActive ? (
        <>
          <TouchableOpacity onPress={() => setSearchActive(false)}>
            <Icon name="arrow-back" color="#444" />
          </TouchableOpacity>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            autoFocus
          />
          <TouchableOpacity onPress={() => setSearchActive(false)}>
            <Icon name="search" color="#444" />
          </TouchableOpacity>
        </>
      ) : (
        <>
          <View style={styles.headerLeft}>
            <Image style={styles.userImage} source={{ uri: userImage }} />
            <Text style={styles.userName}>{userName}</Text>
          </View>
          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.headerIcon}>
              <Icon name="notifications" color="#444" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.headerIcon}
              onPress={() => setSearchActive(true)}
            >
              <Icon name="search" color="#444" />
            </TouchableOpacity>
            <View style={styles.profileContainer}>
              <TouchableOpacity onPress={() => setShowDropdown(!showDropdown)}>
                <Image style={styles.profileImage} source={{ uri: userImage }} />
              </TouchableOpacity>
              {showDropdown && (
                <View style={styles.dropdownMenu}>
                  <Text style={styles.dropdownItem}>Profile</Text>
                  <Text style={styles.dropdownItem}>Settings</Text>
                  <Text style={styles.dropdownItem}>Logout</Text>
                </View>
              )}
            </View>
          </View>
        </>
      )}
    </View>
  );
}

export default function EntrepreneurshipPlatform() {
  const [isSearchActive, setSearchActive] = useState(false);

  useEffect(() => {
    StatusBar.setBarStyle('dark-content', true);
  }, []);

  return (
    <NavigationContainer>
      <View style={{ flex: 1 }}>
        <CustomHeader
          isSearchActive={isSearchActive}
          setSearchActive={setSearchActive}
        />
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ color, size }) => {
              let iconName;

              if (route.name === 'Courses') {
                iconName = 'book';
              } else if (route.name === 'Mentors') {
                iconName = 'people';
              } else if (route.name === 'Community') {
                iconName = 'group';
              } else if (route.name === 'Progress') {
                iconName = 'trending-up';
              } else if (route.name === 'Quizzes') {
                iconName = 'question-answer';
              }

              return <Icon name={iconName} color={color} size={size} />;
            },
            tabBarActiveTintColor: 'blue',
            tabBarInactiveTintColor: '#555',
            tabBarStyle: styles.tabBar,
          })}
        >
          <Tab.Screen name="Courses" component={Courses} />
          <Tab.Screen name="Mentors" component={Mentors} />
          <Tab.Screen name="Community" component={Community} />
          <Tab.Screen name="Progress" component={ProgressTracking} />
          <Tab.Screen name="Quizzes" component={Quizzes} />
        </Tab.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollBottomSpacing: {
    height: 80,
  },
  courseContainer: {
    marginBottom: 20,
  },
  courseThumbnail: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  courseDuration: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: '#fff',
    padding: 5,
    borderRadius: 5,
    fontSize: 12,
  },
  courseInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  instructorImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  courseTextContainer: {
    flex: 1,
    marginLeft: 10,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  courseDetails: {
    fontSize: 14,
    color: '#666',
  },
  courseDetailsThumbnail: {
    width: '100%',
    height: 300,
  },
  courseDetailsContainer: {
    padding: 20,
  },
  courseDetailsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  courseDetailsDescription: {
    marginVertical: 10,
    fontSize: 16,
    lineHeight: 24,
  },
  courseDetailsInfo: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  mentorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  mentorImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  mentorTextContainer: {
    marginLeft: 10,
  },
  mentorName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  mentorBio: {
    fontSize: 14,
    color: '#666',
  },
  mentorProfileImage: {
    width: '100%',
    height: 300,
  },
  mentorProfileContainer: {
    padding: 20,
    alignItems: 'center',
  },
  mentorProfileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  mentorProfileBio: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  bookSessionButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  bookSessionButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  screenNameText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  headerContainer: {
    height: 60,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    marginLeft: 8,
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIcon: {
    marginHorizontal: 8,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  userName: {
    marginLeft: 8,
    fontSize: 18,
    fontWeight: 'bold',
  },
  dropdownMenu: {
    position: 'absolute',
    top: 50,
    right: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  searchInput: {
    flex: 1,
    marginHorizontal: 8,
    padding: 8,
    backgroundColor: '#f1f1f1',
    borderRadius: 4,
  },
  tabBar: {
    backgroundColor: '#fff',
    borderTopWidth: 0,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    paddingBottom: 5,
  },
});
