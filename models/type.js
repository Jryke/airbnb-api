const mongoose = require('mongoose')

module.exports = mongoose.model('Type', {
	name: {
		type: String,
		required: [true, 'Type name is required']
	}
})
