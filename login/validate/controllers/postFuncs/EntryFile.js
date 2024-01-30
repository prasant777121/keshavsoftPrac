import {
    PostGetUserFunc as PostGetUserFuncRepo
} from '../../repos/postFuncs/EntryFile.js';

// import { StartFunc as StartFuncTockenGenerate } from "../../../Tocken/Generate.js";

let PostGetUserFunc = async (req, res) => {
    let LocalBodyData = req.body;
    let LocalUserName = LocalBodyData.UserName;
    let LocalPassword = LocalBodyData.Password;

    let LocalFromRepo = await PostGetUserFuncRepo({
        inUserName: LocalUserName,
        inPassword: LocalPassword
    });

    // if (Object.keys(LocalFromRepo) !== 0) {
    //     let localTocken = StartFuncTockenGenerate({ inResponceData: LocalFromRepo });
    //     if (localTocken.KTF) {
    //         res.cookie('KToken', localTocken.token, { maxAge: 900000, httpOnly: false });
    //         res.json(localTocken);
    //     };
    // };

    res.json(LocalFromRepo);
};

export {
    PostGetUserFunc
};