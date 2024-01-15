import { DeleteFunc as DeleteFuncRepo } from '../../repos/DeleteFuncs/EntryFile.js';

let DeleteFunc =  async (req, res) => {
    let LocalId = req.params.Id;

    let LocalFromRepo = await DeleteFuncRepo({ inId: LocalId });
    res.json(LocalFromRepo);
};

export { DeleteFunc };