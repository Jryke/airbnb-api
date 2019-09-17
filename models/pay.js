const mongoose = require('mongoose')

module.exports = mongoose.model('Pay', {
	amount: {
		type: Number,
		required: true
	},
	currency: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	source: {
		type: String,
		required: true
	}
})
