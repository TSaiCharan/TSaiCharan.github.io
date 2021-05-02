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

function validateLogin()
{
    var number=document.getElementById("number").value;
    var pass=document.getElementById("password").value;
    var found=false;
    database.on("value",(snap)=>{
        snap.forEach((data)=>{
            if(data.val().Mobile==number && data.val().Password==pass){
                var name=data.val().Name;
                found=true;
                alert("Welcome "+name);
                window.open("../index.html","_self");
            }
        })
        if(found==false){
            alert("Credentials not valid");
        }
    })
}