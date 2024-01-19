let StartFunc = async () => {
    let jVarLocalHtmlId = document.getElementById("TemplateForCardId");
    let jVarLocalMainId = document.getElementById("MainId");
    jVarLocalMainId.querySelector(".row").innerHTML = "";

    let jVarLocalFilesArray = await LocalFetchFiles();

    let jVarLocalFilesHtml = jVarLocalFilesArray.map(element => {
        const clone = jVarLocalHtmlId.content.cloneNode(true);
        let jVarLocalCardTitleId = clone.getElementById("CardTitleId");
        jVarLocalCardTitleId.innerHTML = element;

        clone.querySelector("a").href += `?fileName=${element}`;

        return clone;
    });

    jVarLocalFilesHtml.forEach(element => {
        jVarLocalMainId.querySelector(".row").appendChild(element);
    });
};

let LocalFetchFiles = async () => {
    let jVarLocalFetchUrl = "/config/files"
    let response = await fetch(jVarLocalFetchUrl);
    let data = await response.json();

    return data;
};

StartFunc().then();