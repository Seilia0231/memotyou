var titleData = ['title1', 'title2,', 'title3'];
var bodyData = ['body1', 'body2', 'body3'];
function save(){
    if(document.getElementById("title")){
        var title = document.getElementById("title");
        var body = document.getElementById("body");
        titleData.splice(0,1,title.value);
        bodyData.splice(0,1,body.value);
        localStorage.setItem('titledata',JSON.stringify(titleData[0]));
        localStorage.setItem('bodydata',JSON.stringify(bodyData[0]));
    }
    else if(document.getElementById("title2")){
        var title2 = document.getElementById("title2");
        var body2 = document.getElementById("body2");
        titleData.splice(1,1,title2.value);
        bodyData.splice(1,1,body2.value);
        localStorage.setItem('titledata2',JSON.stringify(titleData[1]));
        localStorage.setItem('bodydata2',JSON.stringify(bodyData[1]));
    }
    else{
        var title3 = document.getElementById("title3");
        var body3 = document.getElementById("body3");
        titleData.splice(2,1,title3.value);
        bodyData.splice(2,1,body2.value);
        localStorage.setItem('titledata3',JSON.stringify(titleData[2]));
        localStorage.setItem('bodydata3',JSON.stringify(bodyData[3]));
    }
    console.log(titleData);
    console.log(bodyData);
}

function load(){
    if(document.getElementById("title")){
        var titledata = JSON.parse(localStorage.getItem("titledata"));
        var bodydata = JSON.parse(localStorage.getItem("bodydata"));
        document.getElementById("body").innerHTML = titledata;
        document.getElementById("bodyArea").innerHTML = bodydata;

    }
    else if(document.getElementById("title2")){
        var titledata2 = JSON.parse(localStorage.getItem("titledata2"));
        var bodydata2 = JSON.parse(localStorage.getItem("bodydata2"));
        document.getElementById("body2").innerHTML = titledata2;
    }
    else{
        var titledata3 = JSON.parse(localStorage.getItem("titledata3"));
        var bodydata3 = JSON.parse(localStorage.getItem("bodydata3"));
        document.getElementById("body3").innerHTML = titledata3;
    }
}