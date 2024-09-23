import * as model from "../model/model.js";

function initlistener() {
    $("nav a").on("click", (e) => {
        let btnID = e.currentTarget.id;
        model.changePage(btnID);
    })
}

$(document).ready(function () {
    initlistener();
    model.changePage("home");
    console.log("Started up.")
})