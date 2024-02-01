let StartFunc = ({ inFromFetch }) => {
    let timerInterval;
    Swal.fire({
        title: `Sucessfully Saved <h2>${inFromFetch.length}</h2>`,
        html: "Inserting.. <b></b> milliseconds.",
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            timerInterval = setInterval(() => {
                timer.textContent = `${Swal.getTimerLeft()}`;
            }, 100);
        },
        willClose: () => {
            clearInterval(timerInterval);
        }
    }).then((result) => {
        /* Read more about handling dismissals below */
        window.location.href = "/JsonCRUD/Custom/ShasankNice/Tables/All/All.html";
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log("I was closed by the timer");
        }
    });
};



export { StartFunc };