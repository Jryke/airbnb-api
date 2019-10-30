const Place = require('../models/place.js')
const Review = require('../models/review.js')

module.exports = (req, res) => {

	const search = () => {
		let searchObj = {}
		req.query.max_price ? searchObj.price = { $lte: req.query.max_price } : null
		req.query.min_rooms ? searchObj.bedrooms = { $gte: req.query.min_rooms } : null
		req.query.min_guests ? searchObj.guests = { $gte: req.query.min_guests} : null
		req.query.type ? searchObj.type = req.query.type : null
		req.query.title ? searchObj.title = req.query.title : null
		req.query.host ? searchObj.host = req.query.host : null
		console.log(req.query)
		return searchObj
	}

	Place.find(search())
	.select('bedrooms city country images price reviews title type rating host')
	.populate('type')
	.populate({
		path: 'host',
		select: 'name avatar'
	})
	// .populate('reviews')
	.lean()
	.then(data => {
		let places = data.map(place => {
			return Review.find({place: place._id}).then(reviews => {
				 // set place image / remove place images
				place.images ? place.image = place.images[0] : null
				delete place.images
				// set number of reviews
				place.reviews = reviews.length
				// set place rating
				let ratings = reviews.map(review => review.rating)
				ratings.length > 0 ? place.rating = Math.round(ratings.reduce((a,b) => a + b) / reviews.length) : place.rating = 0
				// set place type
				place.type = place.type.name
				return place
			})
		})
		Promise.all(places).then(data => {
			res.send(data)
		})
	})
	.catch(err => res.send(err))
}
