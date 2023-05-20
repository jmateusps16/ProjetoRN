import createDataContext from './createDataContext';

const feedListReducer = (state, action) => {
    let newState = [];
    switch (action.type) {
        case 'add_feed':
            console.log('No Add Feed');
            return [...state, action.payload];
        case 'delete_feed':
            console.log('No Remove Feed');
            return state.filter(feed => feed.id !== action.payload);
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

const addFeed = dispatch => (titulo, urlFeed, descricao, urlSite, urlImagem) => {
    const newFeed = {
        id: Math.random().toString(),
        titulo,
        urlFeed,
        descricao,
        urlSite,
        urlImagem,
    };

    dispatch({ type: 'add_feed', payload: newFeed });
};

const deleteFeed = dispatch => id => {
    dispatch({ type: 'delete_feed', payload: id });
};

const restoreState = dispatch => async () => {
    return () => {
        console.log('implementar');
    }
}

const deleteAll = dispatch => {
    return () => {
        console.log('implementar');
    }
}

const rssFeeds = [{}];

export const { Context, Provider } = createDataContext(
    feedListReducer,
    { addFeed, deleteFeed, restoreState, deleteAll },
    rssFeeds
);
