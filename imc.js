function imc() {
    var a = document.getElementById("peso").value;
    var b = document.getElementById("altura").value;
    var imc = a/b**2;
    document.getElementById("imc").value = imc
  }

function hc(){
    var a = document.getElementById("hc").value;
    var b = 400*a/100;
    document.getElementById("calhc").value= b
}

function l(){
  var a = document.getElementById("l").value;
  var b = 800*a/100;
  document.getElementById("call").value= b
}

function p(){
  var a = document.getElementById("p").value;
  var b = 400*a/100;
  document.getElementById("calp").value= b
}