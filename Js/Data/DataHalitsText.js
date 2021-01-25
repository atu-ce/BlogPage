var Info={
    text:"Halit's text"
};
var Json = JSON.stringify(Info);
localStorage.setItem("HalitDataText", Json);
var CalledData = localStorage.getItem("HalitDataText");
var InfoJson = JSON.parse(CalledData);

//text:
var Text = document.getElementById("IdContent");
Text.innerHTML = "<div class='badge badge-primary text-wrap'>" + InfoJson.text + "</div>";