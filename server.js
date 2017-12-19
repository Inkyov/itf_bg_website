import express from 'express';
import db from './queries';

const router = express.Router();

router.get('/api/participants', db.getAllParticipants);

module.exports = router;