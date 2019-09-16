
const mongoose = require('mongoose')

module.exports = mongoose.model('Place', {
	title: {
		type: String,
		required: [true, 'title is required']
	},
	description: {
		type: String,
		required: [true, 'description is required']
	},
	type: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Type',
		required: [true, 'type of place is required']
	},
	city: {
		type: String,
		required: [true, 'city is required']
	},
	country: {
		type: String,
		required: [true, 'country is required']
	},
	price: {
		type: Number,
		required: [true, 'price is required']
	},
	rating: {
		type: Number,
		default: 0
	},
	guests: {
		type: Number,
		required: [true, 'guest limit is required']
	},
	bedrooms: {
		type: Number,
		required: [true, 'number of rooms is required']
	},
	bathrooms: {
		type: Number,
		required: [true, 'number of bathrooms is required']
	},
	host: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: [true, 'Place requires a host to be created']
	},
	images: [String],
	amenities: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Amenity',
		required: [true, 'Amenities required to create place']
	}]
})
