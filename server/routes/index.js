import express from 'express';

import * as AuthController from '../controllers/AuthController.js';

const router = express();

router.post('/auth/login', AuthController.login);
router.post('/auth/register', AuthController.register);

export default router;
