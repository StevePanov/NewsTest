import mongoose from 'mongoose';
import '../models/News';
import config from '../../etc/config.json';

const News = mongoose.model('News');

export function setUpConnection() {
    mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`)
}

export function listNews() {
    return News.find();
}

export function createNews(data) {
    const news = new News({
        title: data.title,
        body: data.body
    });

    return news.save();
}

export function deleteNews(id) {
    return News.findById(id).remove();
}