const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req,res)=>{
    const queryText = `SELECT * FROM feedback;`;
    pool.query(queryText)
    .then (dBResponse => {
        console.log('Database GET response', dBResponse);
        res.send(dBResponse.rows);
    })
    .catch( error => {
        console.log('Database GET error', error);
        res.sendStatus(500);
    })
})

router.post('/', (req,res)=>{
    const queryText = `INSERT INTO feedback (feeling, understanding, support, comments)
    VALUES ($1, $2, $3, $4);`;
    const feedback = req.body;

    pool.query(queryText, [feedback.feeling, feedback.understanding, feedback.support, feedback.comments])
    .then (dBResponse => {
        console.log('Database POST response', dBResponse);
        res.sendStatus(201);
    })
    .catch( error => {
        console.log('Database POST error', error);
        res.sendStatus(500);
    })
})

module.exports = router;