const express = require('express');
const gundamRouter = express.Router();
const Gundam = require('../model/gundams')

gundamRouter.get('/', (req, res) => {
    Gundam.find((err, getGundam) => {
        if (err) return res.status(500).send(err)
        return res.status(200).send(getGundam)
    })
})

gundamRouter.get('/:id', (req, res) => {
    Gundam.findById(req.params.id, (err, getGundam) => {
        if (err) return res.status(500).send(err)
        return res.status(200).send(getGundam)
    })
}).post('/', (req, res) => {
    console.log(req.body)
    const newGundam = new Gundam(req.body)
    newGundam.save((err, newGundam) => {
        if (err) return res.status(500).send(err)
        return res.status(201).send(newGundam)
    })
}).put('/', (req, res) => {
    Gundam.findByIdAndUpdate(
        req.params.id,
        body,
        {new: true},
        (err, editedGundam) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send(editedGundam)
        }
    )
}).delete(':/id', (req, res) = {
    Gundam.findByIdAndRemove(req.params.id, (err, deletedGundam) => {
        if(err) return status(500).send(err)
        return status(200).send(deletedGundam)
    })
})

module.exports = gundamRouter