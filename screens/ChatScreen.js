import React from 'react';
import { View, FlatList, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const chats = [
  {
    id: '1',
    userName: 'Morgan Spencer',
    userImage: 'https://placeimg.com/640/480/people',
    lastMessage: 'Hey, can we discuss swapping our design skills? I\'m great with Illustrator!',
    unreadCount: 3,
    time: '9:42 AM',
  },
  {
    id: '2',
    userName: 'Jordan Casey',
    userImage: 'https://placeimg.com/640/480/people',
    lastMessage: 'I’d love to learn more about your experience with React for my next project.',
    unreadCount: 1,
    time: 'Yesterday',
  },
  {
    id: '3',
    userName: 'Taylor Ruiz',
    userImage: 'https://placeimg.com/640/480/people',
    lastMessage: 'Your SEO skills are just what my startup needs. Can you share some tips?',
    unreadCount: 0,
    time: 'Wed',
  },
  // ...additional chats
];

const ChatSnippet = ({ chat, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.chatSnippet}>
      <Image source={{ uri: chat.userImage }} style={styles.avatar} />
      <View style={styles.chatInfo}>
        <Text style={styles.userName}>{chat.userName}</Text>
        <Text style={styles.lastMessage}>{chat.lastMessage}</Text>
      </View>
      {chat.unreadCount > 0 && (
        <View style={styles.unreadBadge}>
          <Text style={styles.unreadCount}>{chat.unreadCount}</Text>
        </View>
      )}
      <Text style={styles.time}>{chat.time}</Text>
    </TouchableOpacity>
  );
};

const ChatScreen = ({ navigation }) => {
  const renderChatSnippet = ({ item }) => (
    <ChatSnippet 
      chat={item} 
      onPress={() => navigation.navigate('ChatDetail', { chatId: item.id })}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={chats}
        keyExtractor={(item) => item.id}
        renderItem={renderChatSnippet}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  chatSnippet: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ececec',
    alignItems: 'center',
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 27.5,
    marginRight: 12,
  },
  chatInfo: {
    flex: 1,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  lastMessage: {
    color: '#686868',
    fontSize: 14,
    marginTop: 4,
  },
  unreadBadge: {
    backgroundColor: '#ff4b4b',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  unreadCount: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  time: {
    fontSize: 12,
    color: '#c7c7c7',
    marginLeft: 10,
  },
});

export default ChatScreen;