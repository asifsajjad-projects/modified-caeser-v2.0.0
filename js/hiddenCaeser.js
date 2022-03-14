function start () {
    let c_text= document.getElementById('ctext').value;
    let c_key= document.getElementById('ckey').value;
    const radios = document.getElementsByName('location');
    
    let y= "location";
for (var i = 0; i <  radios.length; i++) {
  if (radios[i].checked) {
     y= radios[i].value;
    break;
  }
}
let z="_";
let ikey=0;
for(let j=0;j<c_key.length;j++)
{
    ikey+=c_key.charCodeAt(j);
}
for(let i=0;i<c_text.length;i++)
{
  if(i%2==0)
  {
    z+= String.fromCharCode(97+ (c_text.charCodeAt(i) +i+ ikey)%26);
  }
  else
  {
    z+= String.fromCharCode(65+ (c_text.charCodeAt(i) +i+ ikey)%26);
  }
}
let m="@";
for(let k=0;k<y.length;k++)
{
 
    m+= String.fromCharCode(65+ (y.charCodeAt(k)+14)%26);
  
}
ikey=ikey/2;
let res= z +ikey+ m;
navigator.clipboard.writeText(res);
let outbox = document.querySelector("textarea");
outbox.innerText = "The password has been copied to clipboard!";
}
