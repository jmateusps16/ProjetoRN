import React, { useContext, useEffect } from 'react';
import { View, Text, Button, ScrollView, StyleSheet } from 'react-native';
import { Context as FeedListContext } from '../context/FeedListContext';
import { Context as FeedContext } from '../context/FeedContext';

const ShowFeedScreen = ({ route, navigation }) => {
  const { state: feedListState } = useContext(FeedListContext);
  const { state: feedState } = useContext(FeedContext);
  const { id } = route.params;

  const feed = feedListState.find((feed) => feed.id === id);
  const items = feedState[id] ? feedState[id].items : [];

  const { fetchItems } = useContext(FeedContext);

  useEffect(() => {
    fetchItems(feed.urlFeed);
  }, []);

  const AddItemFeed = () => {
    navigation.navigate('AddItemFeed', { id });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Título: {feed.titulo}</Text>
      <Text style={styles.description}>Descrição: {feed.descricao}</Text>
      <Text style={styles.feedUrl}>URL do Feed: {feed.urlFeed}</Text>
      <Text style={styles.siteUrl}>URL do Site: {feed.urlSite}</Text>
      <Text style={styles.sectionTitle}>Notícias:</Text>
      {items.map((item) => (
        <View key={item.id} style={styles.itemContainer}>
          <Text style={styles.itemTitle}>{item.titulo}</Text>
          <Text style={styles.itemDescription}>{item.descricao}</Text>
          <Text style={styles.itemDescription}>{item.dataPublicacao}</Text>
        </View>
      ))}
      {feed && (
        <Button title="Adicionar Item" onPress={AddItemFeed} />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 8,
  },
  feedUrl: {
    fontSize: 14,
  },
  siteUrl: {
    fontSize: 14,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  itemContainer: {
    marginBottom: 16,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  itemDescription: {
    fontSize: 14,
  },
});

export default ShowFeedScreen;
