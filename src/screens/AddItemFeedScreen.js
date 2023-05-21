import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Context as FeedListContext } from '../context/FeedListContext';

const AddItemFeedScreen = ({ route, navigation }) => {
  const { id } = route.params;
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const { state, dispatch } = useContext(FeedListContext);

  const onSubmit = () => {
    if (titulo && descricao) {
      const newItem = {
        id: Math.random().toString(),
        titulo,
        descricao,
      };

      const feedIndex = state.findIndex((feed) => feed.id === id);
      if (feedIndex !== -1) {
        const updatedFeed = { ...state[feedIndex] };
        updatedFeed.items.push(newItem);

        dispatch({ type: 'update_feed', payload: updatedFeed });
        navigation.goBack();
      } else {
        alert('Feed não encontrado.');
      }

      setTitulo('');
      setDescricao('');
    } else {
      alert('Por favor, preencha os campos obrigatórios.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Título: *</Text>
      <TextInput
        style={styles.input}
        value={titulo}
        onChangeText={setTitulo}
        placeholder="Digite o título do item"
      />

      <Text style={styles.label}>Descrição: *</Text>
      <TextInput
        style={styles.input}
        value={descricao}
        onChangeText={setDescricao}
        placeholder="Digite a descrição do item"
      />

      <Button title="Adicionar Item" onPress={onSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default AddItemFeedScreen;
