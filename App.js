import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as FeedProvider } from './src/context/FeedContext';
import IndexScreen from './src/screens/IndexScreen';
import AddFeedScreen from './src/screens/AddFeedScreen';
import ShowFeedScreen from './src/screens/ShowFeedScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Feeds" component={IndexScreen} />
        <Stack.Screen name="Add" component={AddFeedScreen} />
        <Stack.Screen name="ShowFeed" component={ShowFeedScreen} />
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
