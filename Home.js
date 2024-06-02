import React, { useEffect, useState, useCallback } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  SafeAreaView,
  RefreshControl,
} from 'react-native';
import { Feather as Icon, FontAwesome as FAIcon } from '@expo/vector-icons';
import Axios from 'axios';
import styles from './styles';

function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = useCallback(() => {
    setLoading(true);
    Axios.get('https://randomuser.me/api/?results=10').then(({ data }) => {
      setUsers(data.results);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const onRefresh = () => {
    setRefreshing(true);
    fetchData();
    setRefreshing(false);
  };

  function Post({ user, index }) {
    return (
      <View style={styles.post}>
        <View style={styles.postHeader}>
          <Image
            style={styles.userImage}
            source={{ uri: user?.picture.medium }}
          />
          <View style={styles.postHeaderText}>
            <Text style={styles.userName}>
              {user?.name.first} {user?.name.last}
            </Text>
            <Text style={styles.userLocation}>
              {user?.login.username} | {user?.location.city}, {user?.location.country}
            </Text>
          </View>
          <TouchableOpacity style={styles.moreIcon}>
            <Icon name='more-horizontal' size={24} color='#000' />
          </TouchableOpacity>
        </View>
        <View style={styles.postContent}>
          <Text style={styles.postText}>
            Join our entrepreneurship training sessions to learn and grow your business! Our latest tips and tricks can help you succeed.
          </Text>
          <Image
            style={styles.postContentImage}
            source={{
              uri: `https://picsum.photos/500/500?random=${index + 1}`,
            }}
          />
        </View>
        <View style={styles.interactionBar}>
          <View style={styles.interactionLeft}>
            <FAIcon name='thumbs-up' size={18} color='#FFA500' />
            <Text style={styles.interactionText}>104 Likes</Text>
          </View>
          <View style={styles.interactionRight}>
            <Text style={styles.interactionText}>23 comments</Text>
            <Text style={styles.interactionText}>5 shares</Text>
          </View>
        </View>
        <View style={styles.interactionButtons}>
          <TouchableOpacity style={styles.interactionButton}>
            <Icon name='thumbs-up' size={24} color='#000' />
            <Text style={styles.interactionButtonText}>Like</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.interactionButton}>
            <Icon name='message-square' size={24} color='#000' />
            <Text style={styles.interactionButtonText}>Comment</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.interactionButton}>
            <Icon name='share-2' size={24} color='#000' />
            <Text style={styles.interactionButtonText}>Share</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="default" />
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#FFA500" />
        </View>
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <View style={styles.searchHeader}>
            <View style={styles.searchBar1}>
              <TextInput
                style={styles.searchInput}
                placeholder='Search for courses, mentors...'
              />
              <TouchableOpacity style={styles.searchIcon}>
                <Icon name='search' size={22} color='#000' />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.storiesView}>
            <Text style={styles.storiesTitle}>Entrepreneurs</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.storiesScroll}>
              <TouchableOpacity style={styles.storyAdd}>
                <Image
                  source={{ uri: 'https://randomuser.me/api/portraits/men/86.jpg' }}
                  style={styles.storyImage}
                />
                <Icon
                  name='plus-circle'
                  color='#000'
                  size={20}
                  style={styles.storyAddIcon}
                />
              </TouchableOpacity>
              {users.map((user, index) => (
                <TouchableOpacity key={index} style={styles.story}>
                  <Image
                    source={{ uri: user?.picture?.medium }}
                    style={styles.storyImage}
                  />
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
          <View style={styles.posts}>
            {users.map((user, index) => (
              <Post key={index} user={user} index={index} />
            ))}
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

export default Home;
