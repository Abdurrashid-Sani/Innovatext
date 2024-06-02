import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView, 
  ScrollView,
  ActivityIndicator,
  Platform,
  SafeAreaView,
} from "react-native";
import colors from "./colors";

export default function LoginScreen({ navigation }) {
  const [loading, setLoading] = useState(false);

  const continueWithGoogle = () => {
    setLoading(true);
    // Simulate Google login
    setTimeout(() => {
      setLoading(false);
      // After successful login, navigate to the profile screen
      navigation.navigate('ProfileMain');
    }, 2000);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={styles.scrollView}>
        <SafeAreaView style={styles.safeArea}>
          <View>
            {/* Wrapper View with background color */}
            <View style={styles.gifWrapper}>
              <Image
                source={require("./images/group.gif")}
                style={styles.headerImage}
              />
            </View>
            <View style={styles.container}>
              <Text style={styles.welcome}>Join Our Community of Innovators</Text>
              <Text style={styles.wise}>To unlock Your Entrepreneurial Spirit</Text>
              <TouchableOpacity style={styles.button} onPress={continueWithGoogle}>
                {loading ? (
                  <ActivityIndicator size="small" color="white" />
                ) : (
                  <>
                    <Image source={require("./assets/G-icon.png")} style={styles.icon} />
                    <Text style={styles.text}>Continue with Google Account</Text>
                  </>
                )}
              </TouchableOpacity>
              <Text style={styles.wise}>
                Business Opportunities and<Text style={styles.com}> Market Analysis</Text>
              </Text>
              <View style={styles.social}>
                <TouchableOpacity>
                  <Image source={require("./assets/fb-icon.png")} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image source={require("./assets/twitter-icon.png")} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image source={require("./assets/instagram-icon.png")} style={styles.icon} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
  },
  gifWrapper: {
    backgroundColor: colors.primary, // Use primary color for background
    
    overflow: "hidden", // Clip GIF to rounded corners
    borderBottomEndRadius:20,
    borderBottomStartRadius:20,
    marginBottom: 20,
  },
  headerImage: {
    width: "100%",
    height: 200,
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 20,
    marginTop: -15,
    backgroundColor: colors.white,
    padding: 10,
  },
  welcome: {
    marginTop: 20,
    textAlign: "center",
    fontWeight: 'bold',
    fontSize: 20,
    color: colors.primary,
  },
  wise: {
    color: colors.orange,
    marginTop: 10,
  },
  com: {
    color: colors.primary,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 20,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  social: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    width: "60%",
  },
  icon: {
    width: 30,
    height: 30,
    borderRadius: 100,
    backgroundColor: colors.primary,
  },
});
