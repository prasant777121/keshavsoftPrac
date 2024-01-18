import express from 'express';

var router = express.Router();

import { router as routerFromksSample } from './ksSample/route.js';
import { router as routerKSequelize } from './kSequelize/route.js';

router.use('/tableNames', routerKSequelize);
router.use('/ksSample', routerFromksSample);

export { router };