const Review = require('../models/review')

module.exports = (req, res) => {
	Review.find({place: req.params.id})
	.populate('User')
	.populate('Place')
	.then(data => {
		res.send(data)
	})
	.catch(err => res.send(err))
}
