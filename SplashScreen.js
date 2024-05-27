import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar, Platform, ImageBackground } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import * as Progress from 'react-native-progress';

const SplashScreen = ({ navigation }) => {
  const [progress, setProgress] = useState(0);
  const [progressColor, setProgressColor] = useState('#fff');
  const [loadingText, setLoadingText] = useState('Loading...');

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 1) {
          return prev + 0.01;
        }
        return prev;
      });
    }, 50);

    const timer = setTimeout(() => {
      navigation.replace('Onboarding');
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [navigation]);

  useEffect(() => {
    if (progress >= 0.5) {
      setProgressColor('#27ae60');
      setLoadingText('Almost there...');
    }
    if (progress >= 0.8) {
      setProgressColor('#3498db');
      setLoadingText('Finalizing...');
    }
  }, [progress]);

  return (
    <ImageBackground source={require('./images/bg5.png')} style={styles.background}>
      <StatusBar barStyle={Platform.OS === 'ios' ? 'light-content' : 'default'} backgroundColor="#192f6a" />
      <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.container}>
        <Animatable.Image
          animation="bounceIn"
          duration={1500}
          source={require('./images/nn.gif')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Animatable.Text animation="fadeInUp" duration={1500} style={styles.title}>
          Welcome to
        </Animatable.Text>
        <Animatable.Text animation="fadeInUp" duration={1500} style={styles.subtitle}>
          Entrepreneurship Training Platform
        </Animatable.Text>
        <Animatable.Text animation="fadeIn" delay={2000} duration={1500} style={styles.tagline}>
          Empowering Future Innovators
        </Animatable.Text>
        <Progress.Bar progress={progress} width={200} color={progressColor} style={styles.progressBar} />
        <Text style={styles.loadingText}>{loadingText}</Text>
        <TouchableOpacity style={styles.skipButton} onPress={() => navigation.replace('Onboarding')}>
          <Text style={styles.skipButtonText}>Skip</Text>
        </TouchableOpacity>
      </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    marginTop: 10,
  },
  tagline: {
    fontSize: 16,
    color: '#fff',
    marginTop: 10,
    fontStyle: 'italic',
  },
  progressBar: {
    marginTop: 20,
  },
  loadingText: {
    color: '#fff',
    marginTop: 10,
    fontSize: 16,
  },
  skipButton: {
    position: 'absolute',
    bottom: 50,
    right: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  skipButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default SplashScreen;
