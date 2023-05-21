import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as FeedProvider } from './src/context/FeedListContext';
import IndexScreen from './src/screens/IndexScreen';
import AddFeedScreen from './src/screens/AddFeedScreen';
import ShowFeedScreen from './src/screens/ShowFeedScreen';
import AddItemFeedScreen from './src/screens/AddItemFeedScreen';

const Stack = createStackNavigator();

const App = () => {
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
    <FeedProvider>
      <App />
    </FeedProvider>
  );
};
