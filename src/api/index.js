import axios from 'axios';

import { apiPrefix } from '../etc/config.json'

export default {
    listNews() {
        return axios.get(`${apiPrefix}/news`);
    },

    createNews(data) {
        return axios.post(`${apiPrefix}/news`, data);
    }
}