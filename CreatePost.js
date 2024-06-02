import React, { useState } from 'react';
import { View, TextInput, Button, Image, TouchableOpacity, Modal, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Picker } from 'emoji-mart-native';
import styles from './styles';

const CreatePost = ({ onPostCreate }) => {
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const [emojiPickerVisible, setEmojiPickerVisible] = useState(false);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const pickVideo = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      setVideo(result.uri);
    }
  };

  const handleEmojiSelect = (emoji) => {
    setText((prevText) => prevText + emoji.native);
    setEmojiPickerVisible(false);
  };

  const handlePost = () => {
    const newPost = { text, image, video };
    onPostCreate(newPost);
    setText('');
    setImage(null);
    setVideo(null);
  };

  return (
    <View style={styles.createPostContainer}>
      <TextInput
        style={styles.input}
        placeholder="What's on your mind?"
        value={text}
        onChangeText={setText}
      />
      <View style={styles.mediaButtons}>
        <Button title="Add Image" onPress={pickImage} />
        <Button title="Add Video" onPress={pickVideo} />
        <Button title="Add Emoji" onPress={() => setEmojiPickerVisible(true)} />
      </View>
      {image && (
        <View style={styles.mediaPreviewContainer}>
          <Image source={{ uri: image }} style={styles.mediaPreview} />
          <TouchableOpacity onPress={() => setImage(null)} style={styles.removeMediaButton}>
            <Text style={styles.removeMediaText}>Remove</Text>
          </TouchableOpacity>
        </View>
      )}
      {video && (
        <View style={styles.mediaPreviewContainer}>
          <Video source={{ uri: video }} style={styles.mediaPreview} />
          <TouchableOpacity onPress={() => setVideo(null)} style={styles.removeMediaButton}>
            <Text style={styles.removeMediaText}>Remove</Text>
          </TouchableOpacity>
        </View>
      )}
      <Button title="Post" onPress={handlePost} />
      <Modal visible={emojiPickerVisible} animationType="slide">
        <Picker onSelect={handleEmojiSelect} />
        <Button title="Close" onPress={() => setEmojiPickerVisible(false)} />
      </Modal>
    </View>
  );
};

export default CreatePost;
