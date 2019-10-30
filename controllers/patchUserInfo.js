const User = require('../models/user')
const jwt = require('jsonwebtoken')

module.exports = (req, res) => {
  let userInfo = jwt.verify(req.params.token, process.env.SECRET)
  User.findById(userInfo._id)
  .then(userData => {
    if (req.body.avatar == userData.avatar) {
      console.log('no request to update image file')
    } else {
      req.body.avatar = `${req.protocol}://${req.get('host')}/${req.file.filename}`
    }
    User.findByIdAndUpdate(userInfo._id, req.body, {useFindAndModify: false})
    .then(userUpdate => {
      console.log('userUpdate', userUpdate)
      console.log('req.body', req.body)
      res.send(req.body)
    })
  })
  
  .catch(err => {res.send(err)})
}
