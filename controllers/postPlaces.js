const Place = require('../models/place')

module.exports = (req, res) => {
	req.body.images = req.files.map(image => `${req.protocol}://${req.get('host')}/${image.filename}`)
	let amenitiesArr = req.body.amenities.split(',')
	req.body.amenities = amenitiesArr
	Place.create(req.body)
	.then(data => res.send(data))
	.catch(err => console.log(err))
}
