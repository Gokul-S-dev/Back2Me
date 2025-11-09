import express from 'express';

import { createIteam } from '../controllers/iteamController.js';

const router = express.Router();

router.post("/create",createIteam);

export default router;