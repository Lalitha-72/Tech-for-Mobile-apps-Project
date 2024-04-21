import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, SafeAreaView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ProfileInfo = ({ userName, userEmail }) => (
  <View style={styles.profileInfoContainer}>
    <Image source={require('../assets/background_image.jpg')} style={styles.profileImage} />
    <Text style={styles.userName}>{userName}</Text>
    <Text style={styles.userEmail}>{userEmail}</Text>
  </View>
);

const ProfileScreen = ({ navigation }) => {
  const handleSignOut = () => {
    // Implement your sign-out logic here
    console.log('User signed out');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <ProfileInfo userName="John Doe" userEmail="john.doe@example.com" />

        {/* Other setting options */}
        {/* ... */}
        
        <TouchableOpacity style={styles.settingOption} onPress={handleSignOut}>
          <Ionicons name="exit-outline" size={24} color="black" />
          <Text style={styles.optionTitle}>Sign Out</Text>
        </TouchableOpacity>
        <Text style={styles.footer}>VERSION: 9.29.4961</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // ... existing styles
  profileInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20,
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  userEmail: {
    fontSize: 16,
    color: '#666',
  },
  // ... rest of your styles
});

export default ProfileScreen;