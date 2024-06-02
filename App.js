import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import all necessary screens
import SplashScreen from './SplashScreen';
import OnboardingScreen from './OnboardingScreen';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';
import ForgotPasswordScreen from './ForgotPasswordScreen';
import HomeScreen from './HomeScreen';
import CourseScreen from './CourseScreen';
import AssignmentScreen from './AssignmentScreen';
import DiscussionScreen from './DiscussionScreen';
import ResourceScreen from './ResourceScreen';
import ProfileScreen from './ProfileScreen';
import SettingsScreen from './SettingsScreen';
import EditProfileScreen from './EditProfileScreen';
import Explore from './Explore'; // Import Explore component
import CourseList from './CourseList'; // Import CourseList component
import CourseDetails from './CourseDetails'; // Import CourseDetails component

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Stack Navigator for Profile-related screens
const ProfileStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="ProfileMain" component={ProfileScreen} options={{ headerShown: false }} />
    <Stack.Screen name="EditProfile" component={EditProfileScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);

// Stack Navigator for Home-related screens
const HomeStackNavigator = () => (
  <Stack.Navigator>
  <Stack.Screen name="ProfileMain" component={ProfileScreen} options={{ headerShown: false }} />
    <Stack.Screen name="HomeMain" component={HomeScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Courses" component={CourseScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Assignments" component={AssignmentScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Discussions" component={DiscussionScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Resources" component={ResourceScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Explore" component={Explore} options={{ headerShown: false }} />
    <Stack.Screen name="CourseList" component={CourseList} options={{ headerShown: false }} />
    <Stack.Screen name="CourseDetails" component={CourseDetails} options={{ headerShown: false }} />
  </Stack.Navigator>
);

// Bottom Tab Navigator
const MainTabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="HomeTab" component={HomeStackNavigator} options={{ tabBarLabel: 'Home' }} />
    <Tab.Screen name="ProfileTab" component={ProfileStackNavigator} options={{ tabBarLabel: 'Profile' }} />
    <Tab.Screen name="Settings" component={SettingsScreen} options={{ tabBarLabel: 'Settings' }} />
  </Tab.Navigator>
);

// Root Stack Navigator
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">

        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{ headerShown: false }} />

        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ProfileMain" component={ProfileScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={MainTabNavigator} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
