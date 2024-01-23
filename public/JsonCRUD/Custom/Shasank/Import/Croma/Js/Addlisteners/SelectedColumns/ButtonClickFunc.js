import { StartFunc as StartFuncCheckBeforeFetch } from "./CheckBeforeFetch.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch.js";
import { StartFunc as StartFuncFetchFunc } from "./FetchFunc.js";
// import { StartFunc as StartFuncPreparePostData } from "./PreparePostData.js";


let StartFunc = async () => {
    if (StartFuncCheckBeforeFetch()) {

        const input = document.getElementById('csvFileInput');
        const file = input.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = async function (e) {
                const csvData = e.target.result;
                const jsonArray = convertCsvToJsonFunction(csvData);
                if (jsonArray.KTF) {
                    let response = await StartFuncFetchFunc({ inBodyData: jsonArray.CSVArrayData });

                    StartFuncAfterFetch({ inFromFetch: response });

                }
                // let jVarLocalBodyData = await StartFuncPreparePostData({ inCsvJsonData: jsonArray });
                // let response = await StartFuncFetchFunc({ inBodyData: jsonArray });

                // StartFuncAfterFetch({ inFromFetch: response });
            };

            reader.readAsText(file);
        } else {
            alert('Please select a CSV file.');
        };
    };

};

let convertCsvToJsonFunction = (csvData) => {
    const parsedData = Papa.parse(csvData, { header: true, skipEmptyLines: true });
    let CsvParseData = { KTF: false }

    if ("ExternalReferenceID" in parsedData.data[0]) {
        console.log("Croma");
        CsvParseData.CSVArrayData = CromaFunc({ ArrayData: parsedData.data });
        CsvParseData.KTF = true;
        return CsvParseData;
    };
    if ("Job Id" in parsedData.data[0]) {
        console.log("panasonic");

        CsvParseData.CSVArrayData = PanasonicFunc({ ArrayData: parsedData.data });
        CsvParseData.KTF = true;
        return CsvParseData;

    };

}

const CromaFunc = ({ ArrayData }) => {
    const selectedData = ArrayData.map(({
        'ExternalReferenceID': JobId, 'Servify Call Creation Date': CreationDate, 'Servify Status': Status,
        'Customer Name': CustomerName, 'Customer Address': Address, 'Customer Mobile No': MobileNo,
        'Customer Alternate Mobile No.': ContactNo, 'Product Name': ModelName, 'Delivery Type': JobClassification, 'Product Category': ProductGroupName, 'Warranty': WarrantyType, 'SubServiceType': JobType, 'PinCode': Distancetype, 'Last Visit Remarks': AgentRemarks, 'Created By': DealerName, CallFromNo, Brand
    }) => ({ JobId, CreationDate, Status, CustomerName, Address, MobileNo, ContactNo, ModelName, JobClassification, ProductGroupName, WarrantyType, JobType, Distancetype, AgentRemarks, DealerName, CallFromNo, Brand }));

    return selectedData;

};

const PanasonicFunc = ({ ArrayData }) => {
    const selectedData = ArrayData.map(({
        'Job Id': JobId, 'Created Date': CreationDate, Status,
        'Customer Name': CustomerName, Address, 'Mobile No': MobileNo,
        'Contact No': ContactNo, ModelName, 'Job Classification': JobClassification, ProductGroupName, 'Warranty Type': WarrantyType, 'Agent Remarks': AgentRemarks, CallFromNo, "Panasonic": Brand, "Distance Type": DistanceType
    }) => ({ JobId, CreationDate, Status, CustomerName, Address, MobileNo, ContactNo, ModelName, JobClassification, ProductGroupName, WarrantyType, AgentRemarks, CallFromNo, DistanceType, Brand }));

    return selectedData;

}

export { StartFunc };