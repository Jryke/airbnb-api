const Place = require('../models/place.js')

module.exports = (req, res) => {
	Place.findByIdAndUpdate(req.params.id, req.body)
	.then(data => {res.send(data)})
	.catch(err => {res.send(err)})
}
