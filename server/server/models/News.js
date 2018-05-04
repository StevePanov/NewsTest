import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const NewsSchema = new Schema({
    title: { type: String, required: true },
    body: { type: String, required: true }
})

const News = mongoose.model('News', NewsSchema);
