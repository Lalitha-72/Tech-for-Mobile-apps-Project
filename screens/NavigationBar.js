import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Make sure to have the expo package or react-native-vector-icons installed

const NavigationBar = ({ navigation }) => {
  return (
    <View style={styles.navContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.button}>
        <Ionicons name="home" size={24} color="#fff" />
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Post')} style={styles.button}>
        <Ionicons name="create" size={24} color="#fff" />
        <Text style={styles.buttonText}>Post</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Chat')} style={styles.button}>
        <Ionicons name="chatbubbles" size={24} color="#fff" />
        <Text style={styles.buttonText}>Chat</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.button}>
        <Ionicons name="person" size={24} color="#fff" />
        <Text style={styles.buttonText}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Search')} style={styles.button}>
        <Ionicons name="search" size={24} color="#fff" />
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#007bff',
    paddingVertical: 10,
    position: 'absolute', 
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 10,
    zIndex: 1,
  },
  button: {
    alignItems: 'center', // Align the icons and text in the center of the button
    padding: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12, // Adjust font size for better fitting text
    marginTop: 3, // Add space between the icon and text
  },
});

export default NavigationBar;