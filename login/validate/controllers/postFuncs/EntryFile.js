import {
    PostGetUserFunc as PostGetUserFuncRepo
} from '../../repos/postFuncs/EntryFile.js';

import { StartFunc as StartFuncTockenGenerate } from "../../../Tocken/Generate.js";

let PostGetUserFunc = async (req, res) => {
    let LocalBodyData = req.body;
    let LocalUserName = LocalBodyData.UserName;
    let LocalPassword = LocalBodyData.Password;

    let LocalFromRepo = await PostGetUserFuncRepo({
        inUserName: LocalUserName,
        inPassword: LocalPassword
    });
    if (LocalFromRepo === undefined) {
        res.setHeader('Content-Type', 'text/plain');
        res.send('inValid User Credentils');
        res.status(203);
        return;
    };

    if (Object.keys(LocalFromRepo).length > 0) {
        let localUserName = LocalFromRepo.UserName;
        let localId = LocalFromRepo.id;

        let localTocken = StartFuncTockenGenerate({ inUserName: localUserName, inId: localId });

        if (localTocken.KTF) {
            res.cookie('KToken', localTocken.token, { maxAge: 900000, httpOnly: false });
            res.setHeader('Content-Type', 'text/plain');
            res.send(localTocken.token);
            res.status(200);
            return;
        };
    };

    res.status(204);
};

export {
    PostGetUserFunc
};