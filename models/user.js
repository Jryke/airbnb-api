const mongoose = require('mongoose')

module.exports = mongoose.model('User', {
	avatar: {
		type: String,
		default: 'https://randomuser.me/api/portraits/lego/1.jpg'
	},
	email: {
		type: String,
		required: [true, 'email address is required']
	},
	location: {
		type: String,
		required: [true, 'user location is required']
	},
	name: {
		type: String,
		required: [true, 'user name is required']
	},
	password: {
		type: String,
		required: [true, 'password is required'],
		select: false
	}
})
