// const fs = require('fs-extra')
import fs from 'fs';
import path from 'path';

// var path = require('path');

var walk = function (dir, inFolderPath, inDestinationPath, inBranchName, done) {
    var results = [];
    fs.readdir(dir, function (err, list) {
        if (err) return done(err);
        var i = 0;
        (function next() {
            var file = list[i++];
            if (!file) return done(null, inFolderPath, inDestinationPath, inBranchName, results);
            file = path.resolve(dir, file);
            fs.stat(file, function (err, stat) {
                if (stat && stat.isDirectory()) {
                    walk(file, inFolderPath, inDestinationPath, inBranchName, function (err, inFolderPath, inDestinationPath, inBranchName, res) {
                        results = results.concat(res);
                        next();
                    });
                } else {
                    results.push(file);
                    next();
                }
            });
        })();
    });
};

let CallBackFunc = (err, inFolderPath, inToPath, inTableName, results) => {
    if (err) throw err;
    results.forEach(element => {
        let LoopInsidePath = path.parse(element);

        if (LoopInsidePath.base === "Config.json") {
            let LocalFileData = fs.readFileSync(element);
            let LocalFileDataParsed = JSON.parse(LocalFileData);

            LocalFileDataParsed.routePath = inToPath;
            LocalFileDataParsed.tableName = inTableName;

            fs.writeFileSync(element, JSON.stringify(LocalFileDataParsed));

            // console.log("LoopInsidePath : ", JSON.parse(LocalFileData));

        };

    });
};

export { walk, CallBackFunc };