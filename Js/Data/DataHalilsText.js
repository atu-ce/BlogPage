var Info={
    text:"Halil's text"
};
var Json = JSON.stringify(Info);
localStorage.setItem("HalilDataText", Json);
var CalledData = localStorage.getItem("HalilDataText");
var InfoJson = JSON.parse(CalledData);

//text:
var Text = document.getElementById("IdContent");
Text.innerHTML = "<div class='badge badge-primary text-wrap'>" + InfoJson.text + "</div>";