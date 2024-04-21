import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const SignUpScreen = () => {
  // Get navigation object using useNavigation hook
  const navigation = useNavigation();

  // Function to navigate to the LoginScreen after sign up
  const navigateToLoginScreen = () => {
    // Navigate to the LoginScreen
    navigation.navigate('LoginScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to College Skill Swap</Text>
      <View style={styles.form}>
        <Text style={styles.subtitle}>Sign Up</Text>
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry />
        {/* Call navigateToLoginScreen function when Sign Up button is pressed */}
        <Button title="Sign Up" onPress={navigateToLoginScreen} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Background color for the entire screen
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  form: {
    width: '80%', // Adjust the width of the form as needed
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default SignUpScreen;