import jwt from "jsonwebtoken";

const StartFunc = ({ inUserName, inId }) => {
    let localinUserName = inUserName;
    let localinId = inId;
    let LocalReturnObject = { KTF: false };

    if ("KS_SECRET_FORLOGIN" in process.env === false) {
        console.log("KS_SECRET_FORLOGIN not found in .env file");
        return LocalReturnObject;
    };

    let secretKey = process.env.KS_SECRET_FORLOGIN;

    const payload = {
        userId: localinId,
        username: localinUserName
    };

    const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });

    LocalReturnObject.KTF = true;
    LocalReturnObject.token = token;

    return LocalReturnObject;
};

export { StartFunc };