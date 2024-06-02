import React, { useState, useMemo } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Modal,
  Button,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

const mentors = [
  {
    img: 'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
    name: 'Bernard Baker',
    phone: '+1 (862) 581-3022',
    bio: 'Expert in business development and marketing strategy.',
    skills: ['Business Development', 'Marketing Strategy', 'Sales'],
    rating: 4.5,
    available: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
    name: 'Elma Chapman',
    phone: '+1 (913) 497-2020',
    bio: 'Specialist in startup growth and funding.',
    skills: ['Startup Growth', 'Funding', 'Investor Relations'],
    rating: 4.8,
    available: false,
  },
  {
    img: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    name: 'Knapp Berry',
    phone: '+1 (951) 472-2967',
    bio: 'Tech entrepreneur with experience in SaaS products.',
    skills: ['SaaS', 'Product Management', 'Technology'],
    rating: 4.7,
    available: true,
  },
];

const isAuthenticated = true;

export default function Example() {
  const [input, setInput] = useState('');
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedRating, setSelectedRating] = useState(0);
  const [bookmarkedMentors, setBookmarkedMentors] = useState([]);
  const [message, setMessage] = useState('');

  const handleProfilePress = (mentor) => {
    setSelectedMentor(mentor);
  };

  const closeModal = () => {
    setSelectedMentor(null);
  };

  const handleBookmark = (mentor) => {
    setBookmarkedMentors((prev) => {
      if (prev.includes(mentor)) {
        return prev.filter((m) => m !== mentor);
      }
      return [...prev, mentor];
    });
  };

  const handleSendMessage = () => {
    console.log(`Message to ${selectedMentor.name}: ${message}`);
    setMessage('');
    closeModal();
  };

  const filteredRows = useMemo(() => {
    return mentors.filter((mentor) => {
      const matchesQuery = mentor.name.toLowerCase().includes(input.toLowerCase());
      const matchesSkills = selectedSkills.every((skill) => mentor.skills.includes(skill));
      const matchesRating = mentor.rating >= selectedRating;
      return matchesQuery && matchesSkills && matchesRating;
    });
  }, [input, selectedSkills, selectedRating]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      {!isAuthenticated ? (
        <View style={styles.authContainer}>
          <Text style={styles.authTitle}>Welcome to the Entrepreneurship Training Platform</Text>
          <Button title="Log In" onPress={() => console.log('Log In pressed')} />
        </View>
      ) : (
        <View style={styles.container}>
          <View style={styles.searchWrapper}>
            <View style={styles.search}>
              <View style={styles.searchIcon}>
                <FeatherIcon color="#848484" name="search" size={17} />
              </View>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                clearButtonMode="while-editing"
                onChangeText={(val) => setInput(val)}
                placeholder="Search mentors..."
                placeholderTextColor="#848484"
                returnKeyType="done"
                style={styles.searchControl}
                value={input}
              />
            </View>
          </View>

          <View style={styles.filtersWrapper}>
            <Text style={styles.filterLabel}>Skills:</Text>
            <Picker
              selectedValue={selectedSkills}
              onValueChange={(itemValue) => setSelectedSkills(itemValue)}
              mode="dropdown"
              style={styles.picker}>
              <Picker.Item label="All" value={[]} />
              <Picker.Item label="Business Development" value={['Business Development']} />
              <Picker.Item label="Marketing Strategy" value={['Marketing Strategy']} />
              <Picker.Item label="Sales" value={['Sales']} />
              <Picker.Item label="Startup Growth" value={['Startup Growth']} />
              <Picker.Item label="Funding" value={['Funding']} />
              <Picker.Item label="Investor Relations" value={['Investor Relations']} />
              <Picker.Item label="SaaS" value={['SaaS']} />
              <Picker.Item label="Product Management" value={['Product Management']} />
              <Picker.Item label="Technology" value={['Technology']} />
            </Picker>

            <Text style={styles.filterLabel}>Rating:</Text>
            <Picker
              selectedValue={selectedRating}
              onValueChange={(itemValue) => setSelectedRating(itemValue)}
              mode="dropdown"
              style={styles.picker}>
              <Picker.Item label="All" value={0} />
              <Picker.Item label="4.0+" value={4} />
              <Picker.Item label="4.5+" value={4.5} />
              <Picker.Item label="4.7+" value={4.7} />
            </Picker>
          </View>

          <ScrollView contentContainerStyle={styles.searchContent}>
            {filteredRows.length ? (
              filteredRows.map((mentor, index) => {
                const { img, name, phone, bio, skills, rating, available } = mentor;
                const isBookmarked = bookmarkedMentors.includes(mentor);

                return (
                  <View key={index} style={styles.cardWrapper}>
                    <TouchableOpacity onPress={() => handleProfilePress(mentor)}>
                      <View style={styles.card}>
                        {img ? (
                          <Image alt="" resizeMode="cover" source={{ uri: img }} style={styles.cardImg} />
                        ) : (
                          <View style={[styles.cardImg, styles.cardAvatar]}>
                            <Text style={styles.cardAvatarText}>{name[0]}</Text>
                          </View>
                        )}
                        <View style={styles.cardBody}>
                          <Text style={styles.cardTitle}>{name}</Text>
                          <Text style={styles.cardPhone}>{phone}</Text>
                          <Text style={styles.cardBio}>{bio}</Text>
                          <Text style={styles.cardSkills}>Skills: {skills.join(', ')}</Text>
                          <Text style={styles.cardRating}>Rating: {rating}</Text>
                          <Text style={styles.cardAvailability}>
                            Availability: {available ? 'Online' : 'Offline'}
                          </Text>
                        </View>
                        <View style={styles.cardAction}>
                          <TouchableOpacity onPress={() => handleBookmark(mentor)}>
                            <FeatherIcon color={isBookmarked ? "#FFA500" : "#9ca3af"} name="bookmark" size={22} />
                          </TouchableOpacity>
                          <FeatherIcon color="#9ca3af" name="chevron-right" size={22} />
                        </View>
                      </View>
                    </TouchableOpacity>
                    <View style={styles.actionButtons}>
                      <TouchableOpacity style={styles.viewButton} onPress={() => handleProfilePress(mentor)}>
                        <FeatherIcon name="eye" size={20} color="#FFFFFF" />
                        <Text style={styles.viewButtonText}>View Mentor</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              })
            ) : (
              <Text style={styles.searchEmpty}>No results</Text>
            )}
          </ScrollView>

          {selectedMentor && (
            <Modal animationType="slide" transparent={false} visible={true}>
              <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAvoidingView
                  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                  style={{ flex: 1 }}
                >
                  <SafeAreaView style={styles.modalContainer}>
                    <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                      <FeatherIcon name="x" size={30} color="#9ca3af" />
                    </TouchableOpacity>
                    <Image alt="" resizeMode="cover" source={{ uri: selectedMentor.img }} style={styles.modalImage} />
                    <Text style={styles.modalName}>{selectedMentor.name}</Text>
                    <Text style={styles.modalPhone}>{selectedMentor.phone}</Text>
                    <Text style={styles.modalBio}>{selectedMentor.bio}</Text>
                    <Text style={styles.modalSkills}>Skills: {selectedMentor.skills.join(', ')}</Text>
                    <Text style={styles.modalRating}>Rating: {selectedMentor.rating}</Text>
                    <Text style={styles.modalAvailability}>
                      Availability: {selectedMentor.available ? 'Online' : 'Offline'}
                    </Text>
                    <TextInput
                      style={styles.messageInput}
                      placeholder="Type your message..."
                      value={message}
                      onChangeText={(text) => setMessage(text)}
                    />
                    <View style={styles.modalActionButtons}>
                      <TouchableOpacity style={styles.modalActionButton} onPress={handleSendMessage}>
                        <Ionicons name="send" size={20} color="#FFFFFF" />
                        <Text style={styles.modalActionButtonText}>Send Message</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.modalActionButton}>
                        <FeatherIcon name="video" size={20} color="#FFFFFF" />
                        <Text style={styles.modalActionButtonText}>Video Call</Text>
                      </TouchableOpacity>
                    </View>
                  </SafeAreaView>
                </KeyboardAvoidingView>
              </TouchableWithoutFeedback>
            </Modal>
          )}
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 16,
    backgroundColor: '#f4f6f8',
  },
  authContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  authTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0C065AF8',
    marginBottom: 20,
    textAlign: 'center',
  },
  searchWrapper: {
    marginBottom: 16,
  },
  search: {
    position: 'relative',
  },
  searchIcon: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 8,
    justifyContent: 'center',
    zIndex: 99,
  },
  searchControl: {
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
    color: '#000',
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 8,
    paddingLeft: 36,
  },
  filtersWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  filterLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0C065AF8',
  },
  picker: {
    flex: 1,
    height: 50,
    width: 150,
  },
  searchContent: {
    paddingBottom: 16,
  },
  searchEmpty: {
    fontSize: 16,
    color: '#9ca1ac',
    textAlign: 'center',
  },
  cardWrapper: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginBottom: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardImg: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  cardAvatar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9ca1ac',
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  cardAvatarText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  cardBody: {
    marginLeft: 12,
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0C065AF8',
  },
  cardPhone: {
    fontSize: 14,
    color: '#616d79',
    marginTop: 4,
  },
  cardBio: {
    fontSize: 14,
    color: '#616d79',
    marginTop: 8,
  },
  cardSkills: {
    fontSize: 14,
    color: '#616d79',
    marginTop: 4,
  },
  cardRating: {
    fontSize: 14,
    color: '#FFA500',
    marginTop: 4,
  },
  cardAvailability: {
    fontSize: 14,
    color: '#00BFFF',
    marginTop: 4,
  },
  cardAction: {
    paddingLeft: 8,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  viewButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0C065AF8',
    padding: 10,
    borderRadius: 5,
  },
  viewButtonText: {
    color: '#FFFFFF',
    marginLeft: 5,
    fontSize: 14,
  },
  modalContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  modalImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  modalName: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0C065AF8',
    marginTop: 16,
  },
  modalPhone: {
    fontSize: 18,
    color: '#616d79',
    marginTop: 8,
  },
  modalBio: {
    fontSize: 16,
    textAlign: 'center',
    color: '#616d79',
    marginVertical: 16,
  },
  modalSkills: {
    fontSize: 16,
    textAlign: 'center',
    color: '#616d79',
    marginVertical: 8,
  },
  modalRating: {
    fontSize: 16,
    color: '#FFA500',
    marginVertical: 8,
  },
  modalAvailability: {
    fontSize: 16,
    color: '#00BFFF',
    marginVertical: 8,
  },
  modalActionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 16,
  },
  modalActionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0C065AF8',
    padding: 10,
    borderRadius: 5,
  },
  modalActionButtonText: {
    color: '#FFFFFF',
    marginLeft: 5,
    fontSize: 14,
  },
  messageInput: {
    width: '100%',
    padding: 10,
    borderColor: '#0C065AF8',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
  },
});
