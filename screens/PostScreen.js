import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, SafeAreaView } from 'react-native';

const PostScreen = ({ navigation }) => {
  const [postContent, setPostContent] = useState('');

  const handlePostSubmit = () => {
    // Logic to submit the post content to the backend or state management
    console.log('Post submitted:', postContent);
    // After submission, you might want to navigate back to the home screen
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="What's on your mind?"
        value={postContent}
        onChangeText={setPostContent}
        multiline
      />
      <Button title="Post" onPress={handlePostSubmit} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20,
  },
  input: {
    width: '90%',
    height: 100,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  // Add more styles if needed
});

export default PostScreen;