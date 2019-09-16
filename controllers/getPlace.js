const Place = require('../models/place.js')
const Review = require('../models/review')

module.exports = (req, res) => {
	Place.findById(req.params.id)
	.populate({
		path: 'type',
		select: 'name'
	})
	.populate({
		path: 'host',
		select: 'name avatar'
	})
	.populate('amenities')
	.lean()
	.then(place => {
		Review.find({place: place._id})
		.select('author content date rating')
		.populate('author')
		.then(reviews => {
			place.reviews = reviews
			res.send(place)
		})
	})
	.catch(err =>
		{res.send(err)}
	)
}
