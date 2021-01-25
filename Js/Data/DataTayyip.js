var Info = {
    name:"tayyip",
    surname:"uzun",
    age:20,
    hometown:"kahramanmaraş",
    department:"computer engineer",
    username:"t.uzun",
    password:1123581321
};
var Json = JSON.stringify(Info);
localStorage.setItem("tayyipData", Json);
var CalledData = localStorage.getItem("tayyipData");
var InfoJson = JSON.parse(CalledData);

// name:
var Name = document.getElementById("idname");
Name.innerHTML = InfoJson.name;

// surname:
var SurName = document.getElementById("idsurname");
SurName.innerHTML = InfoJson.surname;

// age:
var Age = document.getElementById("idage");
Age.innerHTML = InfoJson.age;

// hometown:
var Hometown = document.getElementById("idhometown");
Hometown.innerHTML = InfoJson.hometown;

// department:
var Department = document.getElementById("iddepartment");
Department.innerHTML = InfoJson.department;