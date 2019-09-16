const Type = require('../models/type')

module.exports = (req, res) => {
	Type.find({})
	.select('name')
	.then(types => {
		console.log(req.params)
		res.send(types)
	})
	.catch(err => res.send(err))
}
