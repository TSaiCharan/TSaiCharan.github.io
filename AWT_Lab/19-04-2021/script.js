var firebaseConfig = {
    apiKey: "AIzaSyDqyLIADt84Np9oioLi1uJx5VoSQzzGkcY",
    authDomain: "firstproject-557e6.firebaseapp.com",
    projectId: "firstproject-557e6",
    storageBucket: "firstproject-557e6.appspot.com",
    messagingSenderId: "775838652531",
    appId: "1:775838652531:web:aced99605cc0d6a005b206",
    measurementId: "G-VDS6LCKPP5"
  };
firebase.initializeApp(firebaseConfig);
var db=firebase.database().ref();
function insertData()
{
    var username=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    db.child(username).set({
        UserName:username,
        Email:email
    })
}
function deleteData()
{
    var name=document.getElementById("name").value;
    db.child(name).remove();
}
function updateData()
{
    var name=document.getElementById("name").value;
    var new_email=document.getElementById("email").value;
    db.child(name).update({
        Email:new_email
    })
}
function display()
{
    var table=document.createElement("TABLE");
    table.border="2";
    row=table.insertRow(-1);
    c1=row.insertCell(-1);
    c2=row.insertCell(-1);
    c1.innerHTML="USERNAME";
    c2.innerHTML="Email";
    db.on("value",(snap)=>{
        snap.forEach((data)=>{
            row=table.insertRow(-1);
            c1=row.insertCell(-1)
            c2=row.insertCell(-1);
            c1.innerHTML=data.val().UserName;
            c2.innerHTML=data.val().Email;
        })
        var div=document.getElementById("table");
        div.append(table);
    })
}