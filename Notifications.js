import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  Switch,
} from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import Axios from 'axios';
import styles from './styles';

function Notifications({ unreadCount }) {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    sound: true,
    vibration: true,
  });

  useEffect(() => {
    // Mocking API call with dummy data
    const mockData = [
      { message: 'You have a new follower', type: 'social', read: false },
      { message: 'Your post received 10 new likes', type: 'likes', read: true },
      { message: 'Your profile was viewed 5 times today', type: 'views', read: false },
      { message: 'Reminder: Complete your profile', type: 'reminder', read: false },
    ];
    setTimeout(() => {
      setNotifications(mockData);
      setLoading(false);
    }, 1000);
  }, []);

  const toggleSetting = (key) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [key]: !prevSettings[key],
    }));
  };

  const markAllAsRead = () => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) => ({ ...notification, read: true }))
    );
  };

  const filterNotifications = (type) => {
    setFilter(type);
  };

  const filteredNotifications = notifications.filter((notification) =>
    filter === 'all' ? true : notification.type === filter
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.pageTitle}>Notifications</Text>
      {unreadCount > 0 && (
        <View style={styles.notificationBadge}>
          <Text style={styles.notificationBadgeText}>{unreadCount}</Text>
        </View>
      )}
      <View style={styles.filterContainer}>
        <TouchableOpacity onPress={() => filterNotifications('all')} style={styles.filterButton}>
          <Text style={styles.filterButtonText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => filterNotifications('social')} style={styles.filterButton}>
          <Text style={styles.filterButtonText}>Social</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => filterNotifications('likes')} style={styles.filterButton}>
          <Text style={styles.filterButtonText}>Likes</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => filterNotifications('views')} style={styles.filterButton}>
          <Text style={styles.filterButtonText}>Views</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => filterNotifications('reminder')} style={styles.filterButton}>
          <Text style={styles.filterButtonText}>Reminder</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={markAllAsRead} style={styles.markAllButton}>
        <Text style={styles.markAllButtonText}>Mark all as read</Text>
      </TouchableOpacity>
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#FFA500" />
        </View>
      ) : (
        <ScrollView>
          {filteredNotifications.map((notification, index) => (
            <View key={index} style={[styles.notification, notification.read ? styles.readNotification : styles.unreadNotification]}>
              <Text style={styles.notificationText}>{notification.message}</Text>
              <TouchableOpacity>
                <Icon name="more-vertical" size={24} color="#000" />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      )}
      <View style={styles.settingsContainer}>
        <Text style={styles.settingsTitle}>Notification Settings</Text>
        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Email Notifications</Text>
          <Switch
            value={settings.emailNotifications}
            onValueChange={() => toggleSetting('emailNotifications')}
          />
        </View>
        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Push Notifications</Text>
          <Switch
            value={settings.pushNotifications}
            onValueChange={() => toggleSetting('pushNotifications')}
          />
        </View>
        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Sound</Text>
          <Switch
            value={settings.sound}
            onValueChange={() => toggleSetting('sound')}
          />
        </View>
        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Vibration</Text>
          <Switch
            value={settings.vibration}
            onValueChange={() => toggleSetting('vibration')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Notifications;
