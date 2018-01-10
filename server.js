import express from 'express';
import db from './queries';

const router = express.Router();

router.get('/api/competitors', db.getAllParticipants);
router.get('/api/clubs', db.getAllClubs);
router.get('/api/degrees', db.getAllDegrees);
router.get('/api/categories', db.getAllCategories);
router.post('/api/participants', db.createParticipant);
router.get('/overview', db.getClubParticipants);

module.exports = router;