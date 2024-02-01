let StartFunc = async ({ inFromfetch }) => {
  let LocalFromfetch = inFromfetch;

  if (LocalFromfetch.status === 500) {
    let data = await LocalFromfetch.json();
    console.log(data);
  }
  window.location.href = "/JsonCRUD/Custom/ShasankNice/Technicians/Show/Show.html";
  // window.location.href = "";
};

export { StartFunc };
