import express from 'express';

var router = express.Router();

import { router as routerForValidate } from './validate/route.js';

router.use('/validate', routerForValidate);

export { router };