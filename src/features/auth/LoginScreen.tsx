import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LoginScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Login Screen</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 22, fontWeight: '600' },
});

export default LoginScreen;
