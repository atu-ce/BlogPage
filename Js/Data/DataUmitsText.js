var Info={
    text:"Umit's text"
};
var Json = JSON.stringify(Info);
localStorage.setItem("UmitDataText", Json);
var CalledData = localStorage.getItem("UmitDataText");
var InfoJson = JSON.parse(CalledData);

//text:
var Text = document.getElementById("IdContent");
Text.innerHTML = "<div class='badge badge-primary text-wrap'>" + InfoJson.text + "</div>";