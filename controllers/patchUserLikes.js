const User = require('../models/user')
const jwt = require('jsonwebtoken')

module.exports = (req, res) => {
	let userInfo = jwt.verify(req.params.token, process.env.SECRET)
	User.findById(userInfo._id)
	.then(userData => {
		if (userData.likes.includes(req.body.likes)) {
			let index = userData.likes.indexOf(req.body.likes)
			userData.likes.splice(index, 1)
			User.findByIdAndUpdate(userInfo._id, userData, {useFindAndModify: false})
			.then(data => {
				data.likes.splice(index, 1)
				res.send(data)
			})
			.catch(err => {res.send(err)})
		} else {
			userData.likes.push(req.body.likes)
			User.findByIdAndUpdate(userInfo._id, userData, {useFindAndModify: false})
			.then(data => {
				data.likes = data.likes.push(req.body.likes)
				res.send(data)
			})
			.catch(err => {res.send(err)})
		}
	})
}
