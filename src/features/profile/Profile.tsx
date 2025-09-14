import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Profile Screen</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 22, fontWeight: '600' },
});

export default ProfileScreen;
