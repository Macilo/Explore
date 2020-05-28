const express = require('express')

// generates a random id
const uuid = require('uuid')

const router = express.Router()

const users = require('../../models/users')

// get all users
router.get('/', (req, res) => {
  res.json(users)
})

// get individual user
router.get('/:id', (req, res) => {
  res.json(users.filter(user => user.id === parseInt(req.params.id)))
})

router.post('/signup', (req, res) => {
  const newUser = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email
  }

  if (!newUser.name || !newUser.email) {
    return res.status(400).json({ msg: 'Please include a name and email' })
  }

  users.push(newUser)
  res.json(users)
})
module.exports = router
