import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native';
import IndexScreen from './src/screens/IndexScreen';
import ShowFeedScreen from './src/screens/ShowFeedScreen';
import AddFeedScreen from './src/screens/AddFeedScreen';
import { Feather } from '@expo/vector-icons';
import { Provider as FeedListProvider } from './src/context/FeedListContext';
import { useContext } from 'react';
import { Context as FeedListContext } from './src/context/FeedListContext';

const Stack = createNativeStackNavigator();

const App = () => {
  const { addFeed } = useContext(FeedListContext);

  const handleAddFeed = (titulo, urlFeed, descricao, urlSite, urlImagem) => {
    addFeed(titulo, urlFeed, descricao, urlSite, urlImagem, () => {
      // Lógica a ser executada após adicionar o feed (se necessário)
    });
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Index'>
        <Stack.Screen 
          name="Index" 
          component={IndexScreen} 
          options={({ navigation }) => ({
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Add')}>
                <Feather name="plus" size={30} />
              </TouchableOpacity>
            )
          })}
        />
        <Stack.Screen name="Show" component={ShowFeedScreen} />
        <Stack.Screen name="Add">
          {() => <AddFeedScreen onAddFeed={handleAddFeed} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return (
    <FeedListProvider>
      <App />
    </FeedListProvider>
  );
};
