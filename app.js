// alert("hello world");

var div = document.getElementsByTagName('div');
var button = document.getElementsByTagName('button');
var p = document.getElementsByTagName('p');
var form = document.getElementsByTagName('form')[0];
form.onsubmit =()=>{return false}

var current_div = 0;
div[current_div].style.display = "block";
if(current_div == 0)
{
    button[0].style.display = "none";
    p[0].style.backgroundColor = "royalblue";
}
 button[1].onclick = ()=>{
    current_div++;
    var back_div = current_div - 1;
    if((current_div >0 ) && (current_div < 4 ))
    {
      button[0].style.display = "block";
      div[current_div].style.display = "block";
      div[back_div].style.display = "none";
      p[current_div].style.backgroundColor = "royalblue";
      p[back_div].style.backgroundColor = "#ededed";
      button[1].innerHTML = "Next";
      button[0].innerHTML = "Previous";
      if (current_div == 3)
      {
       
      button[1].innerHTML = "sign-up";
      }
    }else{
        if(current_div >3){
            form.onsubmit =()=>{return true}

        }
}

   
}
button[0].onclick = ()=>{
    if (current-div >0)
    {
        current_div --;
        var back_div=current_div +1;
        div[current_div].style.dispplay = "block";
        div[back_div].style.dispplay = "none";
        p[current_div].style.backgroundColor = "royalblue";
        p[back_div].style.backgroundColor = "#ededed";
        if(current_div < 3){
            button[1].innerHTML = "Next";
            button[1].innerHTML = "Previous";
        }
    }
    if(current_div == 0){
        button[0].style.display = "none";
    }

}
function myFunction(){
    var x = document.getElementById("myInput")
    if (x.type ==="password"){
        x.type = "text";
        document.getElementById('hide').style.display = "inline-block"
        document.getElementById('show').style.display = "none"
    } else{
        x.type = "passsword"
        document.getElementById('hide').style.display = "none"
        document.getElementById('show').style.display = "inline-block"
    }
}