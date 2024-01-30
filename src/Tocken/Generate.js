import { jwt } from "jsonwebtoken";

const StartFunc = ({ inResponceData }) => {
    let localUserName = inResponceData.UserName;
    let localPassword = inResponceData.Password;
    let localid = inResponceData.id;
    const secretKey = "keshavsoft"; // Replace this with your actual secret key

    const payload = {
        userId: localid, // Example user ID
        username: localUserName // Example username
    };

    // Generate a token with the payload and secret key
    const token = jwt.sign(payload, secretKey, { expiresIn: '1h' }); // Token expires in 1 hour
    console.log('Generated token:', token);
    return token;

};

export { StartFunc };