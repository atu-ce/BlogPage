var Info={
    text:"tayyip's text"
};
var Json = JSON.stringify(Info);
localStorage.setItem("tayyipDataText", Json);
var CalledData = localStorage.getItem("tayyipDataText");
var InfoJson = JSON.parse(CalledData);

//text:
var Text = document.getElementById("IdContent");
Text.innerHTML = "<div class='badge badge-primary text-wrap'>" + InfoJson.text + "</div>";