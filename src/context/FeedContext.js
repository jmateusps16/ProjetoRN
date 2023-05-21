import createDataContext from './createDataContext';

const feedReducer = (state, action) => {
  switch (action.type) {
    case 'fetch_items':
      console.log('implementar');
      return state;
    case 'add_item':
      const { feedId, item } = action.payload;
      return {
        ...state,
        [feedId]: {
          ...state[feedId],
          items: [...(state[feedId]?.items || []), item],
        },
      };
    case 'delete_item':
      const { id, itemId } = action.payload;
      const feed = state[id];
      const updatedItems = feed.items.filter((item) => item.id !== itemId);
      return {
        ...state,
        [id]: {
          ...feed,
          items: updatedItems,
        },
      };
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

const addItem = (dispatch) => (feedId, item) => {
  dispatch({ type: 'add_item', payload: { feedId, item } });
};

const deleteItem = (dispatch) => (id, itemId) => {
  dispatch({ type: 'delete_item', payload: { id, itemId } });
};

const fetchItems = (dispatch) => async (feedURL) => {
  console.log('implementar');
};

const restoreState = (dispatch) => async () => {
  console.log('implementar');
};

const deleteAll = (dispatch) => () => {
  console.log('implementar');
};

export const { Context, Provider } = createDataContext(
  feedReducer,
  { addItem, deleteItem, fetchItems, restoreState, deleteAll },
  {}
);
