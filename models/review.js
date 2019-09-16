const mongoose = require('mongoose')

module.exports = mongoose.model('Review', {
	author: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true
	},
	date: {
		type: Date,
		default: Date.now,
		required: true
	},
	rating: {
		type: Number,
		default: 0,
		required: true
	},
	content: {
		type: String,
		required: [true, 'Review is required before submitting']
	},
	place: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Place',
		required: true
	}
})
