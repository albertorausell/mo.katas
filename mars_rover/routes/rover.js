const Rover = require('../src/rover');
const Mars = require('../src/variables');
const express = require('express');
const router = express.Router();

let rover;

router.get('/', (req, res) => {
    try {
        if (!rover) {
            res.status(200);
            res.send({message: "Please initialize the rover!"});
        } else {
            res.status(200);
            res.send(rover);
        }
    } catch (error) {
        console.log(error.message);
        res.status(500);
        res.send({error: error.message});
    }
});

router.post('/', (req, res) => {
    try {
        Mars.obstacles = req.body.marsObstacles;
        Mars.dimensions = req.body.marsDimensions;
        rover = new Rover(req.body.initPos[0], req.body.initPos[1], req.body.initOrientation);
        res.status(201);
        res.send({message: "Rover initialized!"});
    } catch (error) {
        console.log(error.message);
        res.status(500);
        res.send({error: error.message});
    }
});

router.post('/move', (req, res) => {
    try {
        if (!rover) {
            res.status(200);
            res.send({message: "Please initialize the rover!"});
        } else {
            res.status(200);
            res.send({
                message: rover.move(req.body.commands),
                description: rover
            });
        }
    } catch (error) {
        console.log(error.message);
        res.status(500);
        res.send({error: error.message});
    }
});

router.get('/inspect-area', (req, res) => {
    try {
        if (!rover) {
            res.status(200);
            res.send({message: "To visualize Mars you have to initialize the rover!"});
        } else {
            res.status(200);
            res.send(rover.inspectArea());
        }
    } catch (error) {
        console.log(error.message);
        res.status(500);
        res.send({error: error.message});
    }
});

module.exports = router;