var Info = {
    name:"halit",
    surname:"aslankurt",
    age:29,
    hometown:"kahramanmaraş",
    department:"don't known",
    username:"h.aslankurt",
    password:123456
};
var Json = JSON.stringify(Info);
localStorage.setItem("halitData", Json);
var CalledData = localStorage.getItem("halitData");
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