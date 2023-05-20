import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useContext } from 'react';
import { Context as FeedListContext } from '../context/FeedListContext';

const IndexScreen = ({ navigation }) => {
  const { state, deleteFeed } = useContext(FeedListContext);

  const handleDeleteFeed = id => {
    deleteFeed(id);
  };

  const handleOpenFeed = item => {
    navigation.navigate('Show', { feedTitle: item.titulo, feedUrl: item.urlFeed });
  };

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={feed => feed.id}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <TouchableOpacity onPress={() => handleOpenFeed(item)}>
              <Text style={styles.title}>{item.titulo}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleDeleteFeed(item.id)}>
              <Feather name="trash" style={styles.icon} />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'gray',
  },
  title: {
    fontSize: 18,
    color: 'blue',
  },
  icon: {
    fontSize: 24,
  },
});

export default IndexScreen;
