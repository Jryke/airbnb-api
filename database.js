const mongoose = require('mongoose')

module.exports = mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true}, (err) => err ? console.log(err) : console.log('Connected to MongoDB'))
