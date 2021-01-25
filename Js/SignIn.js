function signin() {
    var username = document.getElementById("idusername");
    var password = document.getElementById("idpassword");
    if (username.value === "t.uzun" && password.value == 1123581321) {
        window.location.href = window.location.origin + "/D:/AhmetTayyip/JavaScript/Projeler/BlogPage2/Html/TayyipsText.html";
    }
    else if (username.value === "h.akpınar" && password.value == 123456) {
        window.location.href = window.location.origin + "/D:/AhmetTayyip/JavaScript/Projeler/BlogPage2/Html/HalilsText.html";
    }
    else if (username.value === "u.kulekci" && password.value == 123456) {
        window.location.href = window.location.origin + "/D:/AhmetTayyip/JavaScript/Projeler/BlogPage2/Html/UmitsText.html";
    }
    else if (username.value === "h.aslankurt" && password.value == 123456) {
        window.location.href = window.location.origin + "/D:/AhmetTayyip/JavaScript/Projeler/BlogPage2/Html/HalitsText.html";
    }
    else {
        alert("!!! Username Or Password Is Incorrect !!!");
    }
}