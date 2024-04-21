import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// Assuming your assets folder is at the root of your project directory
const backgroundImage = require('../assets/background_image.jpg'); // Adjust the path if necessary

const StudentPost = ({ post }) => {
  return (
    <View style={styles.card}>
      {/* Use the backgroundImage as the source for your Image component */}
      <Image source={backgroundImage} style={styles.backgroundImage} />
      <Image source={{ uri: post.userImage }} style={styles.avatar} />
      <Text style={styles.name}>{post.userName}</Text>
      <Text style={styles.time}>{post.time}</Text>
      <Text style={styles.description}>{post.description}</Text>
      {post.image && <Image source={{ uri: post.image }} style={styles.postImage} />}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    // If you want the image to be a background image, position it absolutely
    // and ensure it covers the whole card
    overflow: 'hidden', // Ensure the image does not bleed outside the border radius
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%', // You might need to adjust this if your image aspect ratio is off
    borderRadius: 8, // Match your card's border radius
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    // other styles for the avatar
  },
  name: {
    fontWeight: 'bold',
    // other styles for the name
  },
  time: {
    fontSize: 12,
    color: '#666',
    // other styles for the time
  },
  description: {
    marginTop: 5,
    // other styles for the description
  },
  postImage: {
    width: '100%',
    height: 200,
    marginTop: 10,
    // other styles for the post image
  },
  // ... rest of your styles
});

export default StudentPost;