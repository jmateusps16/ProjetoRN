import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const AddFeedScreen = ({ navigation }) => {
  const [titulo, setTitulo] = useState('');
  const [urlFeed, setUrlFeed] = useState('');

  const onSubmit = () => {
    // Lógica para adicionar o feed usando a função addFeed do contexto
    // Certifique-se de importar o contexto e a função addFeed corretamente

    // Crie um objeto com os dados do feed
    const newFeed = {
      titulo,
      urlFeed,
      descricao: '',
      urlSite: '',
      urlImagem: '',
    };

    // Chame a função addFeed do contexto para adicionar o novo feed
    addFeed(newFeed);

    // Redirecionamento ou lógica adicional após adicionar o feed

    // Limpe os campos de entrada de texto
    setTitulo('');
    setUrlFeed('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Título:</Text>
      <TextInput
        style={styles.input}
        value={titulo}
        onChangeText={setTitulo}
        placeholder="Digite o título do feed"
      />

      <Text style={styles.label}>URL do Feed:</Text>
      <TextInput
        style={styles.input}
        value={urlFeed}
        onChangeText={setUrlFeed}
        placeholder="Digite a URL do feed"
      />

      <Button title="Adicionar Feed" onPress={onSubmit} />
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

export default AddFeedScreen;
