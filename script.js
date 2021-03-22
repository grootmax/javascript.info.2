var request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
    var data=JSON.parse(this.response);
    for(let sanjai of data){
        
        console.log(sanjai.name);
    }
    console.log(data);
}