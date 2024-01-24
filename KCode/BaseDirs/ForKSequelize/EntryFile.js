import fs from 'fs';

let StartFunc = () => {
    try {
        let LocalFrom = "src";
        let LocalTo = "bin";
        let LocalFolderName = "kSequelize";

        fs.cpSync(`${LocalFrom}/${LocalFolderName}`, `${LocalTo}/${LocalFolderName}`, { recursive: true });

        let LocalFileData = fs.readFileSync(`${LocalTo}/${LocalFolderName}/gets.http`);

        let LocalNewFileData = LocalFileData.toString().replaceAll(LocalFrom, LocalTo);

        fs.writeFileSync(`${LocalTo}/${LocalFolderName}/gets.http`, LocalNewFileData);
    } catch (error) {
        console.log("error  : ", error);
    };
};

export { StartFunc };