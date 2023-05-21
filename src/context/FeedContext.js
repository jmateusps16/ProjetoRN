import createDataContext from './createDataContext';
import { XMLParser } from 'fast-xml-parser';
import rssfeed from '../api/rssfeed';

const feedReducer = (state, action) => {
  switch (action.type) {
    case 'fetch_items':
      console.log('implementar');
      return state;
    case 'add_item':
      console.log('implementar');
      return state;
    case 'delete_item':
      console.log('implementar');
      return state;
    case 'restore_state':
      console.log('implementar');
      return state;
    case 'delete_all':
      console.log('implementar');
      return state;
    default:
      return state;
  }
};

const addItem = (dispatch) => (id, item) => {
  const feed = state.find((feed) => feed.id === id);
  if (feed) {
    const updatedFeed = {
      ...feed,
      items: [...feed.items, item],
    };
    dispatch({ type: 'UPDATE_FEED', payload: updatedFeed });
  }
};

const deleteItem = (dispatch) => (id) => {
  console.log('implementar');
};

const fetchItems = (dispatch) => async (feedURL) => {
  const parser = new XMLParser();
  const fetch = rssfeed(feedURL);
  const response = await fetch.get();
  const data = response.data;
  let feed = await parser.parse(response.data);
  console.log('implementar');
};

const restoreState = (dispatch) => async () => {
  console.log('implementar');
};

const deleteAll = (dispatch) => () => {
  console.log('implementar');
};

const rssItems = [{}];

export const { Context, Provider } = createDataContext(
  feedReducer,
  { addItem, deleteItem, fetchItems, restoreState, deleteAll },
  rssItems
);