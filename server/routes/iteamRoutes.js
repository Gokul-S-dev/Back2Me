import express from 'express';

import { createIteam , getIteams} from '../controllers/iteamController.js';

const router = express.Router();

router.post("/create",createIteam);
router.get("/all",getIteams);

export default router;