import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Ensure Ionicons are properly installed

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data for recent searches and suggested search terms
  const recentSearches = [
    { id: '1', name: 'Graphic Design', image: 'https://placeimg.com/640/480/any' },
    { id: '2', name: 'React Development', image: 'https://placeimg.com/640/480/any' },
    // ... more recent searches
  ];

  const suggestedSearchTerms = [
    'Project Management',
    'Public Speaking',
    'Machine Learning',
    // ... more suggested search terms
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchSection}>
        <Ionicons name="ios-search" size={20} color="#000" />
        <TextInput
          placeholder="Search skills, people"
          value={searchQuery}
          onChangeText={setSearchQuery}
          style={styles.searchInput}
        />
      </View>
      <Text style={styles.recentSearchHeader}>Recent</Text>
      <FlatList
        data={recentSearches}
        horizontal
        renderItem={({ item }) => (
          <View style={styles.recentSearchItem}>
            <Image source={{ uri: item.image }} style={styles.recentSearchImage} />
            <Text style={styles.recentSearchName}>{item.name}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
      />
      <Text style={styles.suggestionsHeader}>Try searching for</Text>
      {suggestedSearchTerms.map((term, index) => (
        <TouchableOpacity key={index} style={styles.suggestionItem}>
          <Text style={styles.suggestionText}>{term}</Text>
        </TouchableOpacity>
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 10,
    margin: 10,
    borderRadius: 10,
  },
  searchInput: {
    flex: 1,
    padding: 10,
    fontSize: 16,
  },
  recentSearchHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 10,
  },
  recentSearchItem: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  recentSearchImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  recentSearchName: {
    textAlign: 'center',
    marginTop: 5,
  },
  suggestionsHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 10,
  },
  suggestionItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  suggestionText: {
    fontSize: 16,
  },
  // Add other styles as needed
});

export default SearchScreen;