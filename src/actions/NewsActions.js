import AppDispatcher from '../dispatcher/AppDispatcher';
import Constants from '../constants/AppConstants';

import api from '../api';

const NewsActions = {
    loadNews() {
        AppDispatcher.dispatch({
            type: Constants.LOAD_NEWS_REQUEST
        });

        api.listNews()
        .then(({ data }) =>
            AppDispatcher.dispatch({
                type: Constants.LOAD_NEWS_SUCCESS,
                news: data
            })
        )
        .catch(err =>
            AppDispatcher.dispatch({
                type: Constants.LOAD_NEWS_FAIL,
                error: err
            })
        );
    },

    createNews(news) {
        api.createNews(news)
        .then(() =>
            this.loadNews()
        )
        .catch(err =>
            console.error(err)
        );
    }
};

export default NewsActions;