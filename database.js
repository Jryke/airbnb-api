const mongoose = require('mongoose')

module.exports = mongoose.connect(DATABASE_URL, {useNewUrlParser: true}, (err) => err ? console.log(err) : console.log('Connected to MongoDB'))
