import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather as Icon } from '@expo/vector-icons';
import Home from './Home';
import Explore from './Explore';
import Chats from './Chats';
import Notifications from './Notifications';
import Settings from './Settings';
import Profile from './Profile';

const Tab = createBottomTabNavigator();

export default function SocialUI2() {
  const [hasNewMessages, setHasNewMessages] = useState(true);
  const [unreadCount, setUnreadCount] = useState(3);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#FFA500',
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#0C065AF8',
        },
      }}
    >
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name='home' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='Explore'
        component={Explore}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name='book' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='Chats'
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name='message-circle' color={color} size={size} />
          ),
          tabBarBadge: hasNewMessages ? '●' : null,
        }}
      >
        {() => <Chats hasNewMessages={hasNewMessages} />}
      </Tab.Screen>
      <Tab.Screen
        name='Notifications'
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name='bell' color={color} size={size} />
          ),
          tabBarBadge: unreadCount > 0 ? unreadCount : null,
        }}
      >
        {() => <Notifications unreadCount={unreadCount} />}
      </Tab.Screen>
      <Tab.Screen
        name='Settings'
        component={Settings}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name='settings' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='Profile'
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name='user' color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
