import express from 'express';

var router = express.Router();

import {
    PostGetUserFunc
} from '../../controllers/postFuncs/EntryFile.js';

router.post('/', PostGetUserFunc);

export { router };