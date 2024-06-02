import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const EditProfileScreen = ({ navigation }) => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [bio, setBio] = React.useState('');
  
  const handleSave = () => {
    // Implement save logic here
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name:</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />
      
      <Text style={styles.label}>Email:</Text>
      <TextInput style={styles.input} value={email} onChangeText={setEmail} />

      <Text style={styles.label}>Bio:</Text>
      <TextInput style={styles.input} value={bio} onChangeText={setBio} />
      
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default EditProfileScreen;
