function getCases(){
    var table=document.createElement("TABLE");
    table.border="2";
    var request=new XMLHttpRequest();
    var country="India";
    var url=`https://api.covid19api.com/live/country/${country}`;
    fetch(url)
    .then((response)=>{
        return response.json()
    })
    .then(data=>{
        data.forEach((element)=>{
            if(element.Province=="Telangana"){
                row=table.insertRow(-1);
                c1=row.insertCell(-1);
                c2=row.insertCell(-1);
                c1.innerHTML=element.Date;
                c2.innerHTML=element.Confirmed;
            }
        })
    })
    var div=document.getElementById("table");
    div.append(table);
}