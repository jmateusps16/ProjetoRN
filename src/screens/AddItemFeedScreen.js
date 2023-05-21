import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Context as FeedContext } from '../context/FeedContext';

const AddItemFeedScreen = ({ route, navigation }) => {
    const { id } = route.params;
    const [titulo, setTitulo] = useState('');
    const [link, setLink] = useState('');
    const [descricao, setDescricao] = useState('');
    const { addItem } = useContext(FeedContext);

    const handleSubmit = () => {
        if (titulo && descricao && link) {
            const newItem = {
                id: Math.random().toString(),
                titulo,
                descricao,
                link,
                dataPublicacao: new Date().toUTCString()
            };

            addItem(id, newItem);
            navigation.goBack();

            setTitulo('');
            setLink('');
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

            <Text style={styles.label}>Link: *</Text>
            <TextInput
                style={styles.input}
                value={link}
                onChangeText={setLink}
                placeholder="Digite a Link do item"
            />

            <Button title="Adicionar Item" onPress={handleSubmit} />
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
