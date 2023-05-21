import React, { useContext } from 'react';
import { Button, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Context as FeedListContext } from '../context/FeedListContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
  const { state, deleteFeed } = useContext(FeedListContext);
  
  const handleDeleteFeed = id => { deleteFeed(id); };

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(feed) => feed.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ShowFeed', { id: item.id })}
          >
            <View style={{ flexDirection: 'row', padding: 16 }}>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 18 }}>{item.titulo}</Text>
                <Text>{item.descricao}</Text>
              </View>
              <TouchableOpacity
                onPress={() => handleDeleteFeed(item.id)}
                style={{ marginLeft: 10 }}
              >
                <Feather name="trash" style={{ fontSize: 24 }} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
      <Button title="Adicionar Feed" onPress={() => navigation.navigate('Add')} />
    </View>
  );
};

export default IndexScreen;


// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
// import { Feather } from '@expo/vector-icons';
// import { useContext } from 'react';
// import { Context as FeedListContext } from '../context/FeedListContext';

// const IndexScreen = ({ navigation }) => {
//   const { state, deleteFeed } = useContext(FeedListContext);

//   const handleDeleteFeed = id => {
//     deleteFeed(id);
//   };

//   const handleOpenFeed = item => {
//     navigation.navigate('Show', { feedTitle: item.titulo, feedUrl: item.urlFeed });
//   };

//   return (
//     <View>
//       <FlatList
//         data={state}
//         keyExtractor={feed => feed.id}
//         renderItem={({ item }) => (
//           <View style={styles.row}>
//             <TouchableOpacity onPress={() => handleOpenFeed(item)}>
//               <Text style={styles.title}>{item.titulo}</Text>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => handleDeleteFeed(item.id)}>
//               <Feather name="trash" style={styles.icon} />
//             </TouchableOpacity>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingVertical: 20,
//     paddingHorizontal: 10,
//     borderTopWidth: 1,
//     borderColor: 'gray',
//   },
//   title: {
//     fontSize: 18,
//     color: 'blue',
//   },
//   icon: {
//     fontSize: 24,
//   },
// });

// export default IndexScreen;
