

let text=""
for (let i = 0; i < 12; i++) {
  text += i ;
}

function validateForm(){
  var name = document.getElementById("name").value;
  var roll = document.getElementById("roll").value;
  var dob = document.getElementById("dob").value;
  var gender = document.getElementById("gender");
  var className = document.getElementById("class").value;
  var mob = document.getElementById("mob").value;

  gender.checked ? gender= "Male" : gender="Female";
  var list =[name, roll, dob, gender, className, mob];
  window.localStorage.setItem('data', JSON.stringify(list));

  let text = localStorage.getItem("list");
  let obj = JSON.parse(text);
  document.getElementById("inputNew").innerHTML = obj;


  let text2 = "";
 list.forEach(myFunction);
 document.getElementById("inputNew").innerHTML = text2;
 
function myFunction(item) {
  text2 += "<tr>";
  text2 += "<td>" + item + "</td>"; 
}


if (name==""){
   alert("Name is required")
   return false;
}
if (roll==""){
  alert("Roll no. is required")
  return false;
}else if(roll < 0){
  alert("Invalid Roll No.")
}
if (mob==""){
  alert("Mobile No. is required")
  return false;
}else if(mob < 0){
  alert("Invalid Mobile No.")
}


}