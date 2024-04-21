import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet, Text, Button } from 'react-native';
import StudentPost from '../screens/StudentPost';
import NavigationBar from '../screens/NavigationBar';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([
    {
      id: '1',
      userName: 'John Doe',
      userImage: 'https://placeimg.com/640/480/people',
      time: '2 hours ago',
      description: 'Just finished a project on React Native!',
      image: 'https://placeimg.com/640/480/tech',
    },
    {
      id: '2',
      userName: 'Jane Smith',
      userImage: 'https://placeimg.com/200/300/people',
      time: '1 day ago',
      description: 'Excited to share that I have earned my JavaScript certification!',
      image: null,
    },
  ]);

  const addPost = () => {
    const newPost = {
      id: Date.now().toString(),
      userName: 'Random User',
      userImage: 'https://placeimg.com/400/300/people',
      time: 'Just now',
      description: 'Hello, this is a new random post!',
      image: 'https://placeimg.com/640/480/tech',
    };
    setPosts([newPost, ...posts]);
  };

  const deletePost = (postId) => {
    setPosts(posts.filter(post => post.id !== postId));
  };

  return (
    <View style={styles.container}>
      <Button title="Add Post" onPress={addPost} color="#007bff" />
      <FlatList
        data={posts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View>
            <StudentPost post={item} />
            <Button title="Delete Post" onPress={() => deletePost(item.id)} color="red" />
          </View>
        )}
      />
      <TouchableOpacity style={styles.fab} onPress={() => navigation.navigate('Post')}>
        <Ionicons name="pencil" size={24} color="white" />
        <Text style={styles.fabText}></Text>
      </TouchableOpacity>
      <NavigationBar navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingBottom: 50,
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 80,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowColor: '#000',
    shadowOffset: { height: 2, width: 0 },
  },
  fabText: {
    color: '#fff',
    fontSize: 10,
    marginTop: -3,
  },
});

export default HomeScreen;