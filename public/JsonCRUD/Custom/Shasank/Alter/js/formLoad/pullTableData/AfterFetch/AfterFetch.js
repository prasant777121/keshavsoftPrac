let StartFunc = ({ inFromFetch }) => {
    jFLocalToInnerHtmlid({ inid: inFromFetch.id })
    jFLocalToInputJobId({ inid: inFromFetch.JobId })

};

let jFLocalToInnerHtmlid = ({ inid }) => {
    let jVarLocalHtmlId = 'Id';
    let jVarLocalid = document.getElementById(jVarLocalHtmlId);
    jVarLocalid.value = inid;
};

let jFLocalToInputJobId = ({ inJobId }) => {
    let jVarLocalHtmlId = 'JobId';
   let jVarLocalJobId = document.getElementById(jVarLocalHtmlId);
   
   if (jVarLocalJobId === null === false) {
      jVarLocalJobId.value = inJobId;
   };
};


export { StartFunc };
