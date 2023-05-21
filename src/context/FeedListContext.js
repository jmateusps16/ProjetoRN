import createDataContext from './createDataContext';
//adicionei o add e delete feed.
const feedListReducer = (state, action) => {
  switch (action.type) {
    case 'add_feed':
      return [...state, action.payload];
    case 'delete_feed':
        return state.filter((feed) => feed.id !== action.payload);
    default:
      return state;
  }
};

const addFeed = dispatch => (newFeed) => {
  dispatch({ type: 'add_feed', payload: newFeed });
};

const deleteFeed = dispatch => (id) => {
  dispatch({ type: 'delete_feed', payload: id });
};

export const { Context, Provider } = createDataContext(
  feedListReducer,
  { addFeed, deleteFeed },
  []
);