const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = (req, res) => {
	User.findOne({email: req.body.email}).select('password name email location avatar')
	.then(user => {
		if (bcrypt.compareSync(req.body.password, user.password)) {
			console.log('it works!');
			let userObj = user.toObject()
			let token = jwt.sign(userObj, process.env.SECRET)
			res.send({token: token})
		} else {
			res.send('error')
		}
	})
	.catch(err => res.send(err))
}
