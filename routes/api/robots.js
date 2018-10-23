const express = require('express')
const router = express.Router()

const Robot = require('../../models/Robot')

// @route GET api/robots/:id
// @desc GET a single Robot by ID
// @access Public
router.get('/:id', (req, res) => {
    Robot.findById(req.params.id)
    .then(robot => res.json(robot))
    .catch(err => res.status(404).json(err))
  });
  
// @route GET api/robots
// @desc GET all Robots
// @access Public
router.get('/', (req,res) => {
    Robot
    .find()
    .sort({ date: -1 })
    .then(robots => res.json(robots))
    .catch(err => res.status(404).json({success: false}))
})

// @route POST api/robots
// @desc Create a Robot
// @access Public
router.post('/', (req,res) => {
    const newRobot = new Robot({
        name: req.body.name,
        email: req.body.email,
        imageURL: req.body.imageURL
    })

    newRobot
    .save()
    .then(robot => res.json(robot))
    .catch(err => res.status(404).json({success: false}))
})

// @route DELETE api/robots/:id
// @desc Delete a Robot
// @access Public
router.delete('/:id', (req, res) => {
    Robot.findById(req.params.id)
      .then(robot => robot.remove()
      .then(() => res.json({ success: true })))
      .catch(err => res.status(404).json(err));
  });

// @route UPDATE api/robots/:id
// @desc Update/Edit a Robot
// @access Public
router.put('/:id', (req,res) => {
    Robot.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.json({success: true}))
    .catch(err => res.status(404).json(err))
})


module.exports = router