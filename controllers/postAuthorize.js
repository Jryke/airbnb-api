// const Authorize = require('../models/authorize')
const User = require('../models/user')
const jwt = require('jsonwebtoken')

module.exports = (req, res) => {
	let userInfo = jwt.verify(req.body.token, process.env.SECRET)
	User.findById(userInfo._id).select('-__v -_id').then(user => {
		res.send(user)
	})
}
