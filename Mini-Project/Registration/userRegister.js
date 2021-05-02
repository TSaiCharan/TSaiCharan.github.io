const firebaseConfig = {
    apiKey: "AIzaSyDuA7yoMnzMZTfstEbNIOtdtkaFfHjysdA",
    authDomain: "smartdonor-be9f5.firebaseapp.com",
    projectId: "smartdonor-be9f5",
    storageBucket: "smartdonor-be9f5.appspot.com",
    messagingSenderId: "503359980270",
    appId: "1:503359980270:web:6ab781b2899e3e2ad629ff",
    measurementId: "G-JK2EBDLPXF"
};

firebase.initializeApp(firebaseConfig);
var database=firebase.database().ref();

function createUser()
{
    var name=document.getElementById("name").value;
    var mail=document.getElementById("mail").value;
    var phone=document.getElementById("phoneNumber").value;
    var address=document.getElementById("address").value;
    var pass=document.getElementById("password").value;
    // var conf=document.getElementById("confirmPassword").value;
    // var check=document.getElementById("agree").value;
    database.child(phone).set({
        Name:name,
        Email:mail,
        Mobile:phone,
        Address:address,
        Password:pass
    })
    alert("User successfully registerd. Now login using same credentials.")
    window.open("../Login/login.html","_self");
}

function validatePassword()
{
    var pass=document.getElementById("password").value;
    var conPass=document.getElementById("confirmPassword").value;
    if(pass==conPass && pass!=null){
        createUser();
    }
    else {
        alert("Password and Confirm Password not matching");
    }
}