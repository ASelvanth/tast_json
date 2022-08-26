
var json = [{
    "id" : "selva04", 
    "msg"   : "For the given JSON iterate over all for loops ",
    "mail": "ajselv04@gmail.com"
},
{
    "id" : "john02", 
    "msg"   : "For the given JSON iterate over all for loops ",
    "mail": "john02@gmail.com"
}];

//for loop
for(var i = 0; i < json.length; i++) {
    var obj = json[i];

    console.log(obj.id);
    console.log(obj.msg);
    console.log(obj.mail);

}
//for Each
json.forEach(function(obj) { console.log(obj.msg); });

//for In
for (var key in json) {
if (json.hasOwnProperty(key)) {
  console.log(json[key].id);

 
 
}
}
//for Of
let text = "";
for (let x of json[key].id) {
 text += x; 
}
 console.log(text);