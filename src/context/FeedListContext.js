import createDataContext from './createDataContext';

const feedListReducer = (state, action) => {
    let newState = [];
    switch (action.type) {
        case 'add_feed':
            console.log('No Add Feed');
            return [...state, action.payload];
        case 'delete_feed':
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

const addFeed = (dispatch) => {
    return (titulo, urlFeed, callback) => {
        const newFeed = {
            titulo,
            urlFeed,
            descricao: '',
            urlSite: '',
            urlImagem: '',
        };

        dispatch({ type: 'add_feed', payload: newFeed });

        // Chame o callback, se necessário
        if (callback) {
            callback();
        }
    };
};


const deleteFeed = dispatch => {
    return (id) => {
        console.log('implementar');
    };
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

const rssFeeds = [
    {
        titulo: 'G1 - Todas as notícias',
        urlFeed: 'https://g1.globo.com/rss/g1/',
        descricao: '',
        urlSite: '',
        urlImagem: ''
    },
    {
        titulo: 'G1 - Brasil',
        urlFeed: 'https://g1.globo.com/rss/g1/brasil/',
        descricao: '',
        urlSite: '',
        urlImagem: ''
    },
    {
        titulo: 'G1 - Tecnologia e Games',
        urlFeed: 'https://g1.globo.com/rss/g1/tecnologia/',
        descricao: '',
        urlSite: '',
        urlImagem: ''
    },
    {
        titulo: 'Jovem Nerd',
        urlFeed: 'http://jovemnerd.com.br/rss',
        descricao: '',
        urlSite: '',
        urlImagem: ''
    }

];

export const { Context, Provider } = createDataContext(
    feedListReducer,
    { addFeed, deleteFeed, restoreState, deleteAll },
    rssFeeds
);
