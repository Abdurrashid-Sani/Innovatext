import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions, Animated, Alert, Platform, StatusBar, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Add linear gradient for better visuals

const window = Dimensions.get('window');

const onboardingData = [
  {
    image: require('./images/bg77.png'),
    title: 'Your Journey Begins Now',
    subtitle: 'Equipping you with tools for entrepreneurial success',
  },
  {
    image: require('./images/bg3.png'),
    title: 'Knowledge Fuels Achievement',
    subtitle: 'Dive into extensive courses and expert-led workshops',
  },
  {
    image: require('./images/bg8.png'),
    title: 'Transform Ideas into Reality',
    subtitle: 'Connect with a dynamic network for inspiration and support',
  },
  {
    image: require('./images/bg4.png'),
    title: 'From Vision to Victory',
    subtitle: 'Be a part of our thriving community for unparalleled growth',
  },
];

const OnboardingScreen = ({ navigation }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const scrollViewRef = useRef();
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    animateProgress(currentPage);
  }, [currentPage]);

  const handleNext = () => {
    if (currentPage < onboardingData.length - 1) {
      scrollViewRef.current.scrollTo({ x: (currentPage + 1) * window.width, animated: true });
      setCurrentPage(currentPage + 1);
    } else {
      navigation.navigate('Login'); // Navigate to the login screen
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      scrollViewRef.current.scrollTo({ x: (currentPage - 1) * window.width, animated: true });
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSkip = () => {
    navigation.navigate('Login'); // Navigate to the login screen
  };

  const handleHelp = (title, subtitle) => {
    Alert.alert(title, subtitle);
  };

  const animateProgress = (page) => {
    Animated.timing(progress, {
      toValue: page / (onboardingData.length - 1),
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle={Platform.OS === 'android' ? 'light-content' : 'dark-content'} />
      <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.container}>
        <ScrollView
          ref={scrollViewRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={200}
          decelerationRate="fast"
          onScroll={(event) => {
            const offsetX = event.nativeEvent.contentOffset.x;
            const page = Math.round(offsetX / window.width);
            setCurrentPage(page);
          }}
        >
          {onboardingData.map((item, index) => (
            <OnboardingPage key={index} image={item.image} title={item.title} subtitle={item.subtitle} onHelp={() => handleHelp(item.title, item.subtitle)} />
          ))}
        </ScrollView>
        <View style={styles.progressBarContainer}>
          <Animated.View style={[styles.progressBar, {
            width: progress.interpolate({
              inputRange: [0, 1],
              outputRange: ['0%', '100%'],
            })
          }]} />
        </View>
        <Text style={styles.progressText}>{Math.round((currentPage + 1) / onboardingData.length * 100)}% completed</Text>
        <View style={styles.pagination}>
          {onboardingData.map((_, index) => (
            <View key={index} style={[styles.paginationDot, index === currentPage && styles.paginationDotActive]} />
          ))}
        </View>
        <View style={styles.buttonContainer}>
          {currentPage !== 0 && (
            <TouchableOpacity style={[styles.button, styles.previousButton]} onPress={handlePrevious}>
              <Text style={styles.buttonText}>Previous</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity style={[styles.button, styles.skipButton]} onPress={handleSkip}>
            <Text style={styles.buttonText}>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.nextButton]} onPress={handleNext}>
            <Text style={styles.buttonText}>
              {currentPage === onboardingData.length - 1 ? 'Finish' : 'Next'}
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const OnboardingPage = ({ image, title, subtitle, onHelp }) => (
  <View style={styles.pageContainer}>
    <TouchableOpacity onPress={onHelp}>
      <Image source={image} style={styles.image} />
    </TouchableOpacity>
    <View style={styles.textContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#192f6a',
  },
  container: {
    flex: 1,
  },
  pageContainer: {
    width: window.width,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: 260,
    height: 260,
    marginTop: 50,
    resizeMode: 'contain',
    marginVertical: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#fff',
    textShadowColor: '#000',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 1,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 100,
    textAlign: 'center',
    color: '#fff',
    textShadowColor: '#000',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 1,
  },
  progressBarContainer: {
    height: 5,
    width: '80%',
    backgroundColor: '#ccc',
    borderRadius: 5,
    overflow: 'hidden',
    alignSelf: 'center',
    marginVertical: 20,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#007BFF',
  },
  progressText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
    marginBottom: 20,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
  },
  paginationDotActive: {
    backgroundColor: '#007BFF',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginHorizontal: 5,
    elevation: 2,
  },
  previousButton: {
    backgroundColor: '#6c757d',
  },
  skipButton: {
    backgroundColor: '#dc3545',
  },
  nextButton: {
    backgroundColor: '#007BFF',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
});

export default OnboardingScreen;
