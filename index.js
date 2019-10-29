// Packages
const express = require('express')
require('dotenv').config()
const database = require('./database')


// Express API
const app = express()

// Middleware
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extend: false }))
app.use(bodyParser.json())
const cors = require('cors')
app.use(cors({credentials: true}))
const multer = require('multer')
const upload = multer({ dest: './photos'})
const path = require('path')
app.use(express.static(path.join(__dirname, 'photos')))

// Database

// Routes
app.get('/', require('./controllers/root.js'))
app.get('/places/:id', require('./controllers/getPlace.js'))
app.get('/places', require('./controllers/getPlaces.js'))
app.get('/types/', require('./controllers/getTypes.js'))
app.get('/users', require('./controllers/getUsers.js'))
app.get('/amenities', require('./controllers/getAmenities.js'))
app.get('/reviews/:id', require('./controllers/getReviews.js'))

app.post('/places', require('./controllers/postPlaces.js'))
app.post('/type', require('./controllers/postType.js'))
app.post('/users', require('./controllers/postUsers.js'))
app.post('/amenity', require('./controllers/postAmenity.js'))
app.post('/reviews', require('./controllers/postReviews.js'))
app.post('/signup', upload.single('avatar'), require('./controllers/postUsers.js'))
app.post('/login', require('./controllers/login.js'))
app.post('/auth', require('./controllers/postAuthorize.js'))
app.post('/pay', require('./controllers/postPay.js'))

app.patch('/places/:id', require('./controllers/patchPlace.js'))
app.patch('/users/:token', require('./controllers/patchUser.js'))

app.delete('/places/:id', require('./controllers/deletePlace.js'))

// Run server
app.listen(process.env.PORT, () => console.log('Ready on port 4000'))
