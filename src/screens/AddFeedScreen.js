import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Context as FeedListContext } from '../context/FeedListContext';

const AddFeedScreen = ({ navigation }) => {
  const [titulo, setTitulo] = useState('');
  const [urlFeed, setUrlFeed] = useState('');
  const [descricao, setDescricao] = useState('');
  const [urlSite, setUrlSite] = useState('');
  const [urlImagem, setUrlImagem] = useState('');
  const { addFeed } = useContext(FeedListContext);

  const onSubmit = () => {
    if (titulo && urlFeed && descricao) {
      const newFeed = {
        id: Math.random().toString(),
        titulo,
        urlFeed,
        descricao,
        urlSite: urlSite ? urlSite : 'N/A',
        urlImagem: urlImagem ? urlImagem : 'N/A',
        items: [
          {
            id: 0,
            titulo: 'Atleta patrocinado pela Unimed Teresina é campeão do Picos Pro Race',
            link: 'https://g1.globo.com/pi/piaui/especial-publicitario/unimed-teresina/sos-unimed/noticia/2023/04/25/atleta-patrocinado-pela-unimed-teresina-e-campeao-do-picos-pro-race.ghtml',
            descricao: 'Com a conquista o ciclista segue na liderança do campeonato piauiense de XCO. Lindomar Ferreira, atleta patrocinado pela Unimed Teresina, conquistou mais um título neste final de semana. O ciclista foi campeão do Picos Pro Race Series Short Track. A etapa da 11ª edição da competição aconteceu no Complexo Ponte Estaiada no último sábado (22). Lindomar Ferreira atleta patrocinado Unimed Teresina Ascom/Unimed Teresina O atleta foi 1º lugar na categoria Master B2 e dispara na liderança do campeonato piauiense. “A competição marcou a 3ª etapa do campeonato. A 1ª etapa aconteceu no Parque da Cidade, a 2ª foi em Hugo Napoleão. Com isso sigo na liderança do campeonato em XCO. Foi uma prova de circuito, muito técnica e de velocidade, uma prova de tempo de 40min e mais uma volta”, destaca Lindomar Ferreira. A competição faz parte do calendário oficial da Federal de Ciclismo do Piauí e conta pontos para o ranking estadual de XCO. Picos Pro Race é a maior prova de MTB do Piauí. Em 2023 chegou a sua 11ª Edição fomentando o esporte, desenvolvendo o turismo e gerando renda numa das regiões mais importantes do Piauí.',
            imagem: 'https://s2.glbimg.com/iZkK7HVJP3rvLR1gqgzW2DNX1-0=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/s/3/eN7iiETci8W4AJXW34zQ/lindomar-ferreira-atleta-patrocinado-unimed-teresina.-foto-ascom-2-.jpeg',
            dataPublicacao: 'Tue, 25 Apr 2023 13:43:54 -0000'
          },
          {
            id: 1,
            titulo: 'Ocupação de UTIs para adultos com Covid-19 em hospitais públicos de Fortaleza é a maior desde o início da pandemia',
            link: 'https://g1.globo.com/ce/ceara/noticia/2021/04/07/ocupacao-de-utis-para-adultos-com-covid-19-em-hospitais-publicos-de-fortaleza-e-a-maior-desde-o-inicio-da-pandemia.ghtml',
            descricao: 'Dados desta quarta-feira (7) apontam que lotação chegou a 98%; UTIs infantis também estão próximas do colapso. O Hospital Leonardo da Vinci, referência no tratamento da doença, só tem três leitos disponíveis nesta manhã.',
            imagem: 'https://s2.glbimg.com/EpWPtt_HC_n9YkyaSSRckR7SFKI=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/0/D/fZhc3UTdu4gHsXv9SC5A/pho20200524032.jpg',
            dataPublicacao: 'Wed, 07 Apr 2021 12:19:41 -0000'
          },
        ],
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
