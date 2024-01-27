let StartFunc = async ({ inFromfetch }) => {
    let LocalFromfetch = inFromfetch;
    
    if (LocalFromfetch.status === 500) {
        let data = await LocalFromfetch.json(); 
        console.log(data);         
    } 
  window.location.href = "../../Table/table.html";
};

export { StartFunc };
