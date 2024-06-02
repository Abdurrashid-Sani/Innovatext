import React, { useState } from 'react';
import {
  Box,
  Button,
  Divider,
  HStack,
  Image,
  Input,
  ScrollView,
  Stack,
  Switch,
  Text,
  VStack,
  NativeBaseProvider,
  IconButton,
  Progress,
  Select,
  CheckIcon
} from 'native-base';
import { StyleSheet } from 'react-native';
import { Ionicons, MaterialIcons, AntDesign } from '@expo/vector-icons'; // Expo icons
import Bg from './images/bg (2).jpeg';
import Profilee from './images/best.png';

const Profile = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [email, setEmail] = useState("abdurrashidsani@gmail.com");
  const [phone, setPhone] = useState("+2348077416106");
  const [password, setPassword] = useState("*******");
  const [confirmPassword, setConfirmPassword] = useState("*******");
  const [dob, setDob] = useState("1990-01-01");
  const [address, setAddress] = useState("123 Main St, Lagos");
  const [notifications, setNotifications] = useState(false);
  const [theme, setTheme] = useState("light");
  const [bio, setBio] = useState("Entrepreneur and innovator.");
  const [skills, setSkills] = useState(["Business Strategy", "Marketing", "Leadership"]);
  const [awards, setAwards] = useState(["Best Startup Award 2022", "Top Innovator 2021"]);
  const [recentActivities, setRecentActivities] = useState(["Completed Entrepreneurship 101", "Started Business Management course"]);
  const [favoriteCourses, setFavoriteCourses] = useState(["Entrepreneurship 101", "Marketing Strategies"]);
  const [subscriptionPlan, setSubscriptionPlan] = useState("Premium");
  const [statistics, setStatistics] = useState({
    coursesCompleted: 5,
    hoursSpent: 120,
    certificatesEarned: 3
  });

  const toggleSwitch = () => setIsEnabled(!isEnabled);
  const toggleNotifications = () => setNotifications(!notifications);
  const toggleTheme = (newTheme) => setTheme(newTheme);

  const calculateProfileCompleteness = () => {
    const fields = [email, phone, password, confirmPassword, dob, address, bio, skills.length];
    const filledFields = fields.filter(field => field !== "" && field !== "*******");
    return (filledFields.length / fields.length) * 100;
  };

  return (
    <NativeBaseProvider>
      <ScrollView _contentContainerStyle={styles.scrollViewContainer}>
        <Stack>
          <Box style={styles.relativeBox}>
            <Stack width={'100%'}>
              <Image source={Bg} width={'100%'} alt="Background Image" style={styles.bgImage} />
            </Stack>
            <Box style={styles.profileImageContainer}>
              <HStack justifyContent={'center'} alignItems={'center'} padding={5}>
                <Image source={Profilee} size={120} alt="Profile Picture" style={styles.profileImage} />
              </HStack>
            </Box>
          </Box>
        </Stack>
        <Stack py={7} style={styles.centeredStack}>
          <Text fontSize={'18px'} fontWeight={'bold'} color={'#0C065A'}>
            Abdurrashi Sani
          </Text>
          <Stack space={2} style={styles.bioContainer}>
            <Text fontSize={'16px'} color={'#0C065A'}>
              {bio}
            </Text>
          </Stack>
          <Stack space={2}>
            <Stack>
              <Box borderRadius={7} padding={1} backgroundColor={'#FFA500'}>
                <Text fontSize={'20px'} color={'#FFFFFF'}>{email}</Text>
              </Box>
            </Stack>
            <Box borderRadius={7} alignSelf={'center'} padding={1} backgroundColor={'#0C065A'}>
              <Text fontSize={'20px'} color={'#FFFFFF'}>{phone}</Text>
            </Box>
          </Stack>
        </Stack>
        <Stack padding={5} space={3}>
          <Divider />
          <Stack direction={'row'} style={styles.rowContainer}>
            <Text color={'#0C065A'}>Profile Private</Text>
            <Stack direction={'row'} style={styles.switchContainer}>
              <Text color={'#0C065A'}>on</Text>
              <Switch size="lg" onToggle={toggleSwitch} isChecked={isEnabled} onTrackColor="#FFA500" offTrackColor="#0C065A" />
              <Text color={'#0C065A'}>off</Text>
            </Stack>
          </Stack>
          <Divider />
          {isEnabled ? (
            <>
              <Stack direction={'row'} style={styles.rowContainer}>
                <Stack space={2} direction={'row'}>
                  <Box shadow={2} borderRadius={10} padding={1} bgColor={'#0C065A'}>
                    <Stack direction={'row'} style={styles.verifiedContainer} space={2}>
                      <Ionicons name="checkmark" color={'#FFFFFF'} size={20} />
                      <Text color={'#FFFFFF'}>Verified</Text>
                    </Stack>
                  </Box>
                  <Text color={'#0C065A'}>Email</Text>
                </Stack>
                <Text color={'#0C065A'}>{email}</Text>
              </Stack>
              <Divider />
              <Stack direction={'row'} style={styles.rowContainer}>
                <Stack space={2} direction={'row'}>
                  <Box shadow={2} borderRadius={10} padding={1} bgColor={'#0C065A'}>
                    <Stack direction={'row'} style={styles.verifiedContainer} space={2}>
                      <Ionicons name="checkmark" color={'#FFFFFF'} size={20} />
                      <Text color={'#FFFFFF'}>Verified</Text>
                    </Stack>
                  </Box>
                  <Text color={'#0C065A'}>Phone Number</Text>
                </Stack>
                <Text color={'#0C065A'}>{phone}</Text>
              </Stack>
            </>
          ) : (
            <>
              <Stack direction={'row'} style={styles.rowContainer}>
                <Text color={'#0C065A'}>Email</Text>
                <Input width={'50%'} value={email} onChangeText={setEmail} placeholder="mail.@gmail.com" />
              </Stack>
              <Divider />
              <Stack direction={'row'} style={styles.rowContainer}>
                <Text color={'#0C065A'}>Phone number</Text>
                <Input width={'50%'} value={phone} onChangeText={setPhone} placeholder="9087672772" />
              </Stack>
            </>
          )}
          <Divider />
          <Stack direction={'row'} style={styles.rowContainer}>
            <Text color={'#0C065A'}>Password</Text>
            <Input width={'50%'} placeholder="*******" value={password} onChangeText={setPassword} />
          </Stack>
          <Divider />
          <Stack direction={'row'} style={styles.rowContainer}>
            <Text color={'#0C065A'}>Confirm Password</Text>
            <Input type="password" width={'50%'} placeholder="*******" value={confirmPassword} onChangeText={setConfirmPassword} />
          </Stack>
          <Divider />
          <Stack direction={'row'} style={styles.rowContainer}>
            <Text color={'#0C065A'}>Date of Birth</Text>
            <Input width={'50%'} placeholder="YYYY-MM-DD" value={dob} onChangeText={setDob} />
          </Stack>
          <Divider />
          <Stack direction={'row'} style={styles.rowContainer}>
            <Text color={'#0C065A'}>Address</Text>
            <Input width={'50%'} placeholder="Address" value={address} onChangeText={setAddress} />
          </Stack>
          <Divider />
          <Stack direction={'row'} style={styles.rowContainer}>
            <Text color={'#0C065A'}>Notifications</Text>
            <Switch size="lg" onToggle={toggleNotifications} isChecked={notifications} onTrackColor="#FFA500" offTrackColor="#0C065A" />
          </Stack>
          <Divider />
          <Stack direction={'row'} style={styles.rowContainer}>
            <Text color={'#0C065A'}>Theme</Text>
            <Select
              selectedValue={theme}
              minWidth={200}
              accessibilityLabel="Choose Theme"
              placeholder="Choose Theme"
              onValueChange={toggleTheme}
              _selectedItem={{
                bg: "#FFA500",
                endIcon: <CheckIcon size="5" />,
              }}
            >
              <Select.Item label="Light" value="light" />
              <Select.Item label="Dark" value="dark" />
            </Select>
          </Stack>
          <Divider />
          <Stack style={styles.updateButtonContainer}>
            <Button backgroundColor={'#0C065A'} width={'30%'}>
              Update
            </Button>
          </Stack>
          <Divider />
          <Stack direction={'row'} style={styles.rowContainer}>
            <Text color={'#0C065A'}>Delete Account</Text>
            <MaterialIcons name="arrow-forward" color={'#0C065A'} size={30} />
          </Stack>
          <Divider />
          <Stack space={5}>
            <Text fontSize={'20px'} fontWeight={'bold'} color={'#0C065A'}>Courses Enrolled</Text>
            <VStack space={3}>
              {favoriteCourses.map((course, index) => (
                <HStack justifyContent={'space-between'} key={index}>
                  <Text>{course}</Text>
                  <Button size="sm" backgroundColor={'#FFA500'}>View</Button>
                </HStack>
              ))}
            </VStack>
          </Stack>
          <Divider />
          <Stack space={5}>
            <Text fontSize={'20px'} fontWeight={'bold'} color={'#0C065A'}>Achievements</Text>
            <VStack space={3}>
              {awards.map((award, index) => (
                <HStack justifyContent={'space-between'} key={index}>
                  <Text>{award}</Text>
                  <Button size="sm" backgroundColor={'#FFA500'}>View</Button>
                </HStack>
              ))}
            </VStack>
          </Stack>
          <Divider />
          <Stack space={5}>
            <Text fontSize={'20px'} fontWeight={'bold'} color={'#0C065A'}>Skills</Text>
            <VStack space={3}>
              {skills.map((skill, index) => (
                <Text key={index}>{skill}</Text>
              ))}
            </VStack>
          </Stack>
          <Divider />
          <Stack space={5}>
            <Text fontSize={'20px'} fontWeight={'bold'} color={'#0C065A'}>Activity Feed</Text>
            <VStack space={3}>
              {recentActivities.map((activity, index) => (
                <Box key={index} shadow={2} padding={3} borderRadius={7} backgroundColor={'#FFF'}>
                  <Text>{activity}</Text>
                </Box>
              ))}
            </VStack>
          </Stack>
          <Divider />
          <Stack space={5}>
            <Text fontSize={'20px'} fontWeight={'bold'} color={'#0C065A'}>Mentors</Text>
            <VStack space={3}>
              <HStack justifyContent={'space-between'}>
                <Text>Mr.Abdullahi Tanimu</Text>
                <Button size="sm" backgroundColor={'#FFA500'}>View Mentor</Button>
              </HStack>
              <HStack justifyContent={'space-between'}>
                <Text>Mr. Falalu Umar</Text>
                <Button size="sm" backgroundColor={'#FFA500'}>View Mentor</Button>
              </HStack>
            </VStack>
          </Stack>
          <Divider />
          <Stack space={5}>
            <Text fontSize={'20px'} fontWeight={'bold'} color={'#0C065A'}>Progress Tracker</Text>
            <VStack space={3}>
              <Text color={'#0C065A'}>Entrepreneurship 101</Text>
              <Progress value={75} mx="4" bg="#0C065A" _filledTrack={{ bg: "#FFA500" }} />
              <Text color={'#0C065A'}>Business Management</Text>
              <Progress value={50} mx="4" bg="#0C065A" _filledTrack={{ bg: "#FFA500" }} />
            </VStack>
          </Stack>
          <Divider />
          <Stack space={5}>
            <Text fontSize={'20px'} fontWeight={'bold'} color={'#0C065A'}>Testimonials</Text>
            <VStack space={3}>
              <Text color={'#0C065A'}>"The best platform for entrepreneurship training!" - User A</Text>
              <Text color={'#0C065A'}>"Amazing courses and mentorship." - User B</Text>
            </VStack>
          </Stack>
          <Divider />
          <Stack space={5}>
            <Text fontSize={'20px'} fontWeight={'bold'} color={'#0C065A'}>Connect with Us</Text>
            <HStack justifyContent={'space-between'}>
              <IconButton icon={<AntDesign name="facebook-square" size={30} color="#3b5998" />} />
              <IconButton icon={<AntDesign name="twitter" size={30} color="#00acee" />} />
              <IconButton icon={<AntDesign name="linkedin-square" size={30} color="#0e76a8" />} />
              <IconButton icon={<AntDesign name="instagram" size={30} color="#c32aa3" />} />
            </HStack>
          </Stack>
        </Stack>
        <Divider />
      </ScrollView>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    pb: 10,
    backgroundColor: '#FFFFFF',
  },
  relativeBox: {
    position: 'relative',
  },
  bgImage: {
    width: '100%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  profileImageContainer: {
    position: 'absolute',
    marginBottom: 20,
    top: 130,
    bottom: 0,
    right: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
  },
  profileImage: {
    borderRadius: 100,
  },
  centeredStack: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bioContainer: {
    marginBottom: 20,
  },
  rowContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  switchContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  verifiedContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  updateButtonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
});

export default Profile;
