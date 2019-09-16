const mongoose = require('mongoose')

module.exports = mongoose.model('Amenity', {
	name: {
		type: String,
		required: [true, 'Amenity name is required']
	},
	icon: {
		type: String,
		required: [true, 'Link to amenity icon is required']
	}
})
