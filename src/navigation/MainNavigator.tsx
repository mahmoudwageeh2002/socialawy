// src/navigation/MainNavigator.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import FeedScreen from '../features/feed/Feed';
import ChatScreen from '../features/chat/Chat';
import ProfileScreen from '../features/profile/Profile';
// import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ color, size }) => {
          let iconName: string = 'home';

          if (route.name === 'Feed') {
            iconName = 'home';
          } else if (route.name === 'Chat') {
            iconName = 'message-circle';
          } else if (route.name === 'Profile') {
            iconName = 'user';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default MainNavigator;
