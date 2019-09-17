const stripe = require('stripe')(process.env.STRIPE_SECRET)

module.exports = (req, res) => {
	stripe.charges.create(req.body)
	.then(data => {
		res.send(data)
	}).catch(err => {
		console.log(err)
	})
}
