const User = require('../models/user.model')

module.exports = {
    findAllUsers: (req, res) => {
    User.find()
        .then((allUsers) => {
            res.status(200).json({ allUsers })
        })
        .catch((err) => {
            res.status(400).json({ message: 'Something went wrong in find all controllers', error: err })
        })
    },

    createNewUser : (req, res) => {
    User.create(req.body)
        .then(newlyCreatedUser => {
            res.status(200).json({ newlyCreatedUser })
        })
        .catch((err) => {
            res.status(400).json({ message: 'Something went wrong in create controllers', error: err })
        })
    },

    getOneUser : (req, res) => {
    User.findOne({ _id: req.params.id })
        .then(oneSingleUser => {
            res.status(200).json({ oneSingleUser })
        })
        .catch((err) => {
            res.status(400).json({ message: 'Something went wrong in find one controllers', error: err })
        })
    },

    updateUser : (req, res) => {
    User.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedUser => {
            res.status(200).json({ updatedUser })
        })
        .catch((err) => {
            res.status(400).json({ message: 'Something went wrong in update controllers', error: err })
        })
    },

    deleteUser : (req, res) => {
    User.deleteOne({ _id: req.params.id })
        .then(result => {
            res.status(200).json({ result: result })
        })
        .catch((err) => {
            res.status(400).json({ message: 'Something went wrong in delete controllers', error: err })
        })
    }
}
