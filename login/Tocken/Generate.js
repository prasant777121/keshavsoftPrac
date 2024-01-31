import jwt from "jsonwebtoken";

const StartFunc = ({ inUserName, inId }) => {
    let localinUserName = inUserName;
    let localinId = inId;
    if ("KS_SECRETE_FORLOGIN" in process.env === false) {
        console.log("KS_SECRETE_FORLOGIN not found in .env file");
    };
    let secretKey = process.env.KS_SECRETE_FORLOGIN;

    // const secretKey = "keshavsoft";
    let LocalReturnObject = { KTF: false }

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