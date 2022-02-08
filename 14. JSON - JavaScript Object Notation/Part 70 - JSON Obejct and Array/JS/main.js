//JSON Object and Array

//Ajax Code to access JSON page data
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        //console.log(this.responseText) //get json data from data.json page
        var data = this.responseText;
        //console.log(data); //get json data by assigning variable data
        jsonData(data);
    }
};
xmlhttp.open("GET", "data.json", true);
xmlhttp.send();


function jsonData(json_obj){
    //console.log(json_obj);
    var js_obj = JSON.parse(json_obj);
    //console.log(js_obj);
    for(x in js_obj.person){
        var persons = js_obj.person;
        //console.log(persons[x]); //access all data of js_obj
        for(y in persons[x]){
            console.log(persons[x][y]); //access all data individually
        }
    }
}