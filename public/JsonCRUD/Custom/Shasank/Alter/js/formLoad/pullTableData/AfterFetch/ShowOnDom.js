const StartFunc = ({ inFromFetch }) => {
    console.log("inFromFetch:", inFromFetch);
    jFLocalToInputJobId({ inJobId: inFromFetch.JobId })
    jFLocalToInputStatusId({ inStatusId: inFromFetch.Status })
    jFLocalToInputCustomerNameid({ inCustomerNameid: inFromFetch.CustomerName })
    jFLocalToInputAddressId({ inAddressId: inFromFetch.Address })
    jFLocalToInputMobileNoid({ inMobileNoid: inFromFetch.MobileNo })
    jFLocalToInputContactNoid({ inContactNoid: inFromFetch.ContactNo })
    jFLocalToInputModelNameid({ inModelNameid: inFromFetch.ModelName })
    jFLocalToInputJobClassificationid({ inJobClassificationid: inFromFetch.JobClassification })
    jFLocalToInputProductGroupNameid({ inProductGroupNameid: inFromFetch.ProductGroupName })
    jFLocalToInputWarrantyTypeid({ inWarrantyTypeid: inFromFetch.WarrantyType })
    jFLocalToInputJobTypeid({ inJobTypeid: inFromFetch.JobType })
    jFLocalToInputAgentRemarksid({ inAgentRemarksid: inFromFetch.AgentRemarks })
    jFLocalToInputDistanceTypeid({ inDistanceTypeid: inFromFetch.DistanceType })
    jFLocalToInputDealerNameid({ inDealerNameid: inFromFetch.DealerName })
    jFLocalToInputCallFromNoid({ inCallFromNoid: inFromFetch.CallFromNo })
    jFLocalToInputCreationDateid({ inCreationDateid: inFromFetch.CreationDate })
    jFLocalToInputRemarksid({ inRemarksid: inFromFetch.Remarks })
};


let jFLocalToInputJobId = ({ inJobId }) => {
    let jVarLocalHtmlId = 'JobId';
    let jVarLocalJobId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalJobId === null === false) {
        jVarLocalJobId.innerHTML = inJobId;
    };
};
let jFLocalToInputStatusId = ({ inStatusId }) => {
    let jVarLocalHtmlId = 'StatusId';
    let jVarLocalStatusId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalStatusId === null === false) {
        jVarLocalStatusId.value = inStatusId;
    };
};

let jFLocalToInputCustomerNameid = ({ inCustomerNameid }) => {
    let jVarLocalHtmlId = 'CustomerNameid';
   let jVarLocalCustomerNameid = document.getElementById(jVarLocalHtmlId);
   
   if (jVarLocalCustomerNameid === null === false) {
      jVarLocalCustomerNameid.value = inCustomerNameid;
   };
};
let jFLocalToInputAddressId = ({ inAddressId }) => {
    let jVarLocalHtmlId = 'AddressId';
    let jVarLocalAddressId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalAddressId === null === false) {
        jVarLocalAddressId.value = inAddressId;
    };
};

let jFLocalToInputMobileNoid = ({ inMobileNoid }) => {
    let jVarLocalHtmlId = 'MobileNoid';
    let jVarLocalMobileNoid = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalMobileNoid === null === false) {
        jVarLocalMobileNoid.value = inMobileNoid;
    };
};

let jFLocalToInputContactNoid = ({ inContactNoid }) => {
    let jVarLocalHtmlId = 'ContactNoid';
    let jVarLocalContactNoid = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalContactNoid === null === false) {
        jVarLocalContactNoid.value = inContactNoid;
    };
};

let jFLocalToInputModelNameid = ({ inModelNameid }) => {
    let jVarLocalHtmlId = 'ModelNameid';
    let jVarLocalModelNameid = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalModelNameid === null === false) {
        jVarLocalModelNameid.value = inModelNameid;
    };
};

let jFLocalToInputJobClassificationid = ({ inJobClassificationid }) => {
    let jVarLocalHtmlId = 'JobClassificationid';
    let jVarLocalJobClassificationid = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalJobClassificationid === null === false) {
        jVarLocalJobClassificationid.value = inJobClassificationid;
    };
};

let jFLocalToInputProductGroupNameid = ({ inProductGroupNameid }) => {
    let jVarLocalHtmlId = 'ProductGroupNameid';
    let jVarLocalProductGroupNameid = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalProductGroupNameid === null === false) {
        jVarLocalProductGroupNameid.value = inProductGroupNameid;
    };
};

let jFLocalToInputWarrantyTypeid = ({ inWarrantyTypeid }) => {
    let jVarLocalHtmlId = 'WarrantyTypeid';
    let jVarLocalWarrantyTypeid = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalWarrantyTypeid === null === false) {
        jVarLocalWarrantyTypeid.value = inWarrantyTypeid;
    };
};

let jFLocalToInputJobTypeid = ({ inJobTypeid }) => {
    let jVarLocalHtmlId = 'JobTypeid';
   let jVarLocalJobTypeid = document.getElementById(jVarLocalHtmlId);
   
   if (jVarLocalJobTypeid === null === false) {
      jVarLocalJobTypeid.value = inJobTypeid;
   };
};

let jFLocalToInputAgentRemarksid = ({ inAgentRemarksid }) => {
    let jVarLocalHtmlId = 'AgentRemarksid';
   let jVarLocalAgentRemarksid = document.getElementById(jVarLocalHtmlId);
   
   if (jVarLocalAgentRemarksid === null === false) {
      jVarLocalAgentRemarksid.value = inAgentRemarksid;
   };
};

let jFLocalToInputDistanceTypeid = ({ inDistanceTypeid }) => {
    let jVarLocalHtmlId = 'DistanceTypeid';
   let jVarLocalDistanceTypeid = document.getElementById(jVarLocalHtmlId);
   
   if (jVarLocalDistanceTypeid === null === false) {
      jVarLocalDistanceTypeid.value = inDistanceTypeid;
   };
};

let jFLocalToInputDealerNameid = ({ inDealerNameid }) => {
    let jVarLocalHtmlId = 'DealerNameid';
   let jVarLocalDealerNameid = document.getElementById(jVarLocalHtmlId);
   
   if (jVarLocalDealerNameid === null === false) {
      jVarLocalDealerNameid.value = inDealerNameid;
   };
};

let jFLocalToInputCallFromNoid = ({ inCallFromNoid }) => {
    let jVarLocalHtmlId = 'CallFromNoid';
   let jVarLocalCallFromNoid = document.getElementById(jVarLocalHtmlId);
   
   if (jVarLocalCallFromNoid === null === false) {
      jVarLocalCallFromNoid.value = inCallFromNoid;
   };
};

let jFLocalToInputCreationDateid = ({ inCreationDateid }) => {
    let jVarLocalHtmlId = 'CreationDateid';
   let jVarLocalCreationDateid = document.getElementById(jVarLocalHtmlId);
   
   if (jVarLocalCreationDateid === null === false) {
      jVarLocalCreationDateid.value = inCreationDateid;
   };
};


let jFLocalToInputRemarksid = ({ inRemarksid }) => {
    let jVarLocalHtmlId = 'Remarksid';
   let jVarLocalRemarksid = document.getElementById(jVarLocalHtmlId);
   
   if (jVarLocalRemarksid === null === false) {
      jVarLocalRemarksid.value = inRemarksid;
   };
};

export { StartFunc };