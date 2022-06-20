const mongoose = require("mongoose");
const schema = mongoose.Schema;

const restaurantsSchema = new schema({
    name: {
        type: String,
        require: true
    },
    locality:{
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
    },
    aggregate_rating: {
        type: Number,
        require:true
    },
    location_id: {
        type: Number,
        require: true
    },
    city_id: {
        type: Number,
        require: true
    },
    thumb: {
        type: Array,
        required: true
    },
    aggregate_rating: {
        type: Number,
        required: true
    },
    min_price: {
        type: Number,
        require: true
    },
    cuisine_id: {
        type: Array,
        require: true
    },
    cuisine: {
        type: Array,
        require: true
    },
    mealtype_id: {
        type: Number,
        require: true
    }
})
module.exports = mongoose.model('restaurants', restaurantsSchema, 'restaurants');