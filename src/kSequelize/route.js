import express from 'express';

var router = express.Router();

import { StartFunc as StartFuncTableNames } from './TableNames.js';

router.get('/', async (req, res) => {
    let LocalTablesArray = await StartFuncTableNames();
    
    res.json(LocalTablesArray);
});

router.get('/asArray', async (req, res) => {
    let LocalTablesArray = await StartFuncTableNames();

    let LocalReturnArray = LocalTablesArray.map((element) => element.name);

    res.json(LocalReturnArray);
});

export { router };

