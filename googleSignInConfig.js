// googleSignInConfig.js
import { GoogleSignin } from '@react-native-google-signin/google-signin';

// Initialize the Google SDK
GoogleSignin.configure({
  webClientId: '116965360883-8dc46cfl0egju4l79vc6okjoe5cfsccl.apps.googleusercontent.com', // Replace with your actual Web Client ID
  offlineAccess: true,
  scopes: ['profile', 'email'],
});
