import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Context as FeedContext } from '../context/FeedContext';

const AddFeedScreen = ({ navigation }) => {
  const [titulo, setTitulo] = useState('');
  const [urlFeed, setUrlFeed] = useState('');
  const [descricao, setDescricao] = useState('');
  const [urlSite, setUrlSite] = useState('');
  const [urlImagem, setUrlImagem] = useState('');
  const { addFeed } = useContext(FeedContext);

  const onSubmit = () => {
    if (titulo && urlFeed && descricao) {
      const newFeed = {
        id: Math.random().toString(),
        titulo,
        urlFeed,
        descricao,
        urlSite: urlSite ? urlSite : 'N/A',
        urlImagem: urlImagem ? urlImagem : 'N/A',
      };

      addFeed(newFeed);

      setTitulo('');
      setUrlFeed('');
      setDescricao('');
      setUrlSite('');
      setUrlImagem('');

      alert('Feed adicionado com sucesso!');
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
        placeholder="Digite o título do feed"
      />

      <Text style={styles.label}>URL do Feed: *</Text>
      <TextInput
        style={styles.input}
        value={urlFeed}
        onChangeText={setUrlFeed}
        placeholder="Digite a URL do feed"
      />

      <Text style={styles.label}>Descrição: *</Text>
      <TextInput
        style={styles.input}
        value={descricao}
        onChangeText={setDescricao}
        placeholder="Digite a descrição do feed"
      />

      <Text style={styles.label}>URL Site:</Text>
      <TextInput
        style={styles.input}
        value={urlSite}
        onChangeText={setUrlSite}
        placeholder="Digite a URL do Site do feed"
      />

      <Text style={styles.label}>URL Imagem:</Text>
      <TextInput
        style={styles.input}
        value={urlImagem}
        onChangeText={setUrlImagem}
        placeholder="Digite a Imagemdo feed"
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


// import React, { useState, useContext } from 'react';
// import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
// import { Context as FeedListContext } from '../context/FeedListContext';

// const AddFeedScreen = ({ navigation }) => {
//     const [titulo, setTitulo] = useState('');
//     const [urlFeed, setUrlFeed] = useState('');
//     const [descricao, setDescricao] = useState('');
//     const [urlSite, setUrlSite] = useState('');
//     const [urlImagem, setUrlImagem] = useState('');
//     const { addFeed } = useContext(FeedListContext);

//     const onSubmit = () => {
//         // Verificar se os campos obrigatórios estão preenchidos
//         if (titulo && urlFeed && descricao) {
//             // Criar um objeto com os dados do feed
//             const newFeed = {
//                 titulo,
//                 urlFeed,
//                 descricao,
//                 urlSite: urlSite ? urlSite : '',
//                 urlImagem: urlImagem ? urlImagem : '',
//             };

//             // Chamar a função addFeed do contexto para adicionar o novo feed
//             addFeed(newFeed);

//             // Limpar os campos de entrada de texto
//             setTitulo('');
//             setUrlFeed('');
//             setDescricao('');
//             setUrlSite('');
//             setUrlImagem('');

//             // Redirecionar ou executar lógica adicional após adicionar o feed

//             // Exibir um tooltip de sucesso
//             alert('Feed adicionado com sucesso!');
//         } else {
//             // Exibir um tooltip de erro ou tomar a ação adequada
//             alert('Por favor, preencha os campos obrigatórios.');
//         }
//     };

//     return (
//         <View style={styles.container}>
//             <Text style={styles.label}>Título: *</Text>
//             <TextInput
//                 style={styles.input}
//                 value={titulo}
//                 onChangeText={setTitulo}
//                 placeholder="Digite o título do feed"
//             />

//             <Text style={styles.label}>URL do Feed: *</Text>
//             <TextInput
//                 style={styles.input}
//                 value={urlFeed}
//                 onChangeText={setUrlFeed}
//                 placeholder="Digite a URL do feed"
//             />

//             <Text style={styles.label}>Descrição: *</Text>
//             <TextInput
//                 style={styles.input}
//                 value={descricao}
//                 onChangeText={setDescricao}
//                 placeholder="Digite a descrição do feed"
//             />

//             <Text style={styles.label}>URL Site:</Text>
//             <TextInput
//                 style={styles.input}
//                 value={urlSite}
//                 onChangeText={setUrlSite}
//                 placeholder="Digite a Url do site"
//             />

//             <Text style={styles.label}>URL Imagem:</Text>
//             <TextInput
//                 style={styles.input}
//                 value={urlImagem}
//                 onChangeText={setUrlImagem}
//                 placeholder="Digite a url da imagem"
//             />

//             <Button title="Adicionar Feed" onPress={onSubmit} />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 16,
//     },
//     label: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         marginBottom: 8,
//     },
//     input: {
//         height: 40,
//         borderColor: 'gray',
//         borderWidth: 1,
//         marginBottom: 16,
//         paddingHorizontal: 8,
//     },
// });

// export default AddFeedScreen;
