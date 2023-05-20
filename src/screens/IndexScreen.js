import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useContext } from 'react';
import { Context as FeedListContext } from '../context/FeedListContext';

const IndexScreen = ({ navigation }) => {
    const { state, deleteFeed } = useContext(FeedListContext);
    // com o addFeed
    // const { state, addFeed, deleteFeed } = useContext(FeedListContext);

    // Teste para ver se funcionou o add
    // const handleAddFeed = () => {
    //     addFeed('Novo Feed', 'https://exemplo.com/feed');
    //   };

    const handleDeleteFeed = id => {
        deleteFeed(id);
    };

    return (
        <View>
            <FlatList
                data={state}
                keyExtractor={feed => feed.id}
                renderItem={({ item }) => (
                    <View style={styles.row}>
                        <Text style={styles.title}>{item.titulo}</Text>
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
    },
    icon: {
        fontSize: 24,
    },
});

export default IndexScreen;
