function loadJson(file,callback)
{
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function() {
    if(xhr.readyState === 4 && xhr.status=="200")
    {
      callback(xhr.responseText);
    }
  };
  xhr.send();
}

loadJson("dynamic.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  profile(data.profile);
  career(data.career);
  Education(data.Education);
  Skills(data.Skills);
})
var left=document.querySelector(".left");
function profile(p){
  console.log(p.ig);
  var image=document.createElement("img");
  image.src=p.ig;
  left.appendChild(image);

  var h2=document.createElement("h2");
  h2.textContent=p.name;
  left.append(h2);

  var h2=document.createElement("h2");
  h2.textContent=p.desig;
  left.append(h2);

  var h3=document.createElement("h3");
  h3.textContent=p.email;
  left.append(h3);

  var h4=document.createElement("h4");
  h4.textContent=p.mobile;
  left.append(h4);
}

  var right=document.querySelector(".right");
  function career(c){
  var h1=document.createElement("h1");

  h1.textContent="Career Objective";
  right.appendChild(h1);

  var hr=document.createElement("hr");
  right.append(hr);


}
var right=document.querySelector(".right");
function Education(e){
var h1=document.createElement("h1");

h1.textContent="Education Details";
right.append(h1);
var hr=document.createElement("hr");
right.append(hr);

var table=document.createElement("table");
// right.append(table);

var tr1="<tr><th>qualification</th><th>Institution</th><th>percentage</th><th>YOP</th></tr>"
var tr2=" ";
for(var i=0;i<e.length;i++)
{
  tr2=tr2+"<tr><td>"+e[i].qualification+"</td><td>"+e[i].Institution+"</td><td>"+e[i].percentage+"</td><td>"+e[i].YOP+"</td></tr>";

}
table.innerHTML=tr1+tr2;
right.append(table);
}
var right=document.querySelector(".right");
function Skills(s){
var h1=document.createElement("h1");
h1.textContent="Skills";
right.append(h1);
var hr=document.createElement("hr");
right.append(hr);
var ul=document.createElement("ul");
for(var i in s){
  var li=document.createElement("li");
  li.innerHTML=s[i].name+":"+s[i].info;
  ul.append(li);
}
right.append(ul);
}
