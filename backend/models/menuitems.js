const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ItemsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    restaurantId:{
        type: String,
        require: true
    }
})

module.exports = mongoose.model('items', ItemsSchema, 'items'); // exporting the model