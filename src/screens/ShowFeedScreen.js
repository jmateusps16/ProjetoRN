import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Context as FeedListContext } from '../context/FeedListContext';

const ShowFeedScreen = ({ route }) => {
  const { state } = useContext(FeedListContext);
  const { id } = route.params;

  const feed = state.find((feed) => feed.id === id);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Título: {feed.titulo}</Text>
      <Text style={styles.description}>Descrição: {feed.descricao}</Text>
      <Text style={styles.feedUrl}>URL do Feed: {feed.urlFeed}</Text>
      <Text style={styles.siteUrl}>URL do Site: {feed.urlSite}</Text>

      <Button title="Editar Feed" onPress={() => {}} />

      <Text style={styles.sectionTitle}>Itens:</Text>
      {feed.items.map((item) => (
        <View key={item.id} style={styles.itemContainer}>
          <Text style={styles.itemTitle}>{item.titulo}</Text>
          <Text style={styles.itemDescription}>{item.descricao}</Text>
        </View>
      ))}
    </View>
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