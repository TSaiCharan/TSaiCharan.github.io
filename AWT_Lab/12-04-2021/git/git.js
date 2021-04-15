function getRepos()
{
    var user='tsaicharan';
    var url=`https://api.github.com/users/${user}/respos`;
    var table=document.createElement("TABLE");
    table.border="2";
    fetch(url)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        data.forEach(element=>{
            console.log("running");
            var row=table.insertRow(-1);
            c1=row.insertCell(-1);
            c2=row.insertCell(-1);
            c3=row.insertCell(-1);
            c1.innerHTML=element.name;
            c2.innerHTML=element.owner.login;
            c3.innerHTML=element.descprition;
        })
    })
    var div=document.getElementById("table");
    div.append(table);
}