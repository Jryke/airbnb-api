const User = require('../models/user')
const jwt = require('jsonwebtoken')

module.exports = (req, res) => {
	let userInfo = jwt.verify(req.params.token, process.env.SECRET)
	User.findById(userInfo._id)
	.then(userData => {
		userData.likes.push(req.body.likes)
		User.findByIdAndUpdate(userInfo._id, userData)
		.then(data => {
			data.likes = data.likes.push(req.body.likes)
			res.send(data)
		})
		.catch(err => {res.send(err)})
	})
}
