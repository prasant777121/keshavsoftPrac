import KeysJson from './Keys.json' assert {type: 'json'};

let StartFunc = () => {
    //  var input = document.querySelector('input[type="file"]')

    let jVarLocalfileUpload = document.getElementById("ImageUploadInputId");


    // console.log("sssssssss : ", input);
    var data = new FormData();
    data.append('image', jVarLocalfileUpload.files[0])

    KeysJson.body = data;

    return KeysJson;
};

export { StartFunc }