import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as FeedListProvider } from './src/context/FeedListContext';
import { Provider as FeedProvider } from './src/context/FeedContext';
import IndexScreen from './src/screens/IndexScreen';
import AddFeedScreen from './src/screens/AddFeedScreen';
import ShowFeedScreen from './src/screens/ShowFeedScreen';
import AddItemFeedScreen from './src/screens/AddItemFeedScreen';

const Stack = createStackNavigator();

const App = () => {
  //Utilizei o Navigator para navegar entre as telas
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Feeds" component={IndexScreen} />
        <Stack.Screen name="Add" component={AddFeedScreen} />
        <Stack.Screen name="ShowFeed" component={ShowFeedScreen} />
        <Stack.Screen name="AddItemFeed" component={AddItemFeedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return (
    <FeedListProvider>
      <FeedProvider>
        <App />
      </FeedProvider>
    </FeedListProvider>
  );
};
