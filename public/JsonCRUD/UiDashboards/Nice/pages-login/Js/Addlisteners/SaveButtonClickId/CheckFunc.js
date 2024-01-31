let StartFunc = () => {
    let localuserNameId = document.getElementById("yourUsername");
    let localPassWordId = document.getElementById("yourPassword");

    if (localuserNameId.value === "") {
        localuserNameId.classList.add("is-invalid");
        return false;
    };

    if (localPassWordId.value === "") {
        localPassWordId.classList.add("is-invalid");
        return false;
    };

    return true;
};

export { StartFunc };