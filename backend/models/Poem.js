const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const poemSchema = new Schema({
    title: {type: String, required: true},
    creator: {type: Schema.Types.ObjectId, required: true},
    tags: [{type: String, required: true}],
    favourites_count: {type: Number, required: true},
    bookmarks_count: {type: Number, required: true},
    date_created: {type: Date, required: true}
});

// indexing by title
poemSchema.index({title: 'text'});

module.exports = mongoose.model('Poem', poemSchema);