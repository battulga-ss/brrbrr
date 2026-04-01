import express from 'express';
import { createQuest, completeQuest } from '../controllers/questController';

const router = express.Router();

router.post('/', createQuest);
router.patch('/:id/complete', completeQuest);

export default router;
