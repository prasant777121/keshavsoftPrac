let StartFunc = async ({ inFromfetch }) => {
  let LocalFromfetch = inFromfetch;
  let localuserNameId = document.getElementById("yourUsername");
  let locallocaluserNameId = localuserNameId.value;

  if (LocalFromfetch.status === 500) {
    let data = await LocalFromfetch.json();
    console.log(data);
  }
  if (LocalFromfetch.status === 200) {
    window.location.href = `/JsonCRUD/Custom/ShasankNice/EngineerAdmin/OutSide/MobileFromTecnician/MobileFromTecnician.html?Engineer=${locallocaluserNameId}`;
    console.log(data);
  }
  // window.location.href = "../../Table/table.html";
};

export { StartFunc };
