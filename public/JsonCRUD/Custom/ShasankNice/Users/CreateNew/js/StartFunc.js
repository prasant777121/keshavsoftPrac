// import { StartFunc as StartFuncNavMenu } from "./NavMenu/EntryFile.js";
import { StartFunc as StartFuncformLoad } from "./formLoad/EntryFile.js";
import { StartFunc as StartFuncButtonClickFunc } from "./Addlisteners/SaveButtonClickId/ButtonClickFunc.js";

const StartFunc = () => {
    StartFuncformLoad();

    const form = document.getElementById("FormId");

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent HTML refresh

        StartFuncButtonClickFunc();

        // const formData = new FormData(form); // Converts to array of arrays
        // const obj = Object.fromEntries(formData); // Array of arrays to object
        // console.log("aaaaaaaa : ", obj);
    });


    // StartFuncAddlisteners();
};

StartFunc();