var modal = document.getElementById('formulario');

var btn = document.getElementsByClassName('add_table')[0];

var close = document.getElementsByClassName("close")[0];

var input = document.getElementsByTagName("input");

var option = document.getElementsByTagName("option");

function clearContents(){
    modal.style.top = "-200%";
    modal.style.background = "rgba(0,0,0,0.0)";
    modal.style.zIndex = -1;
    document.getElementById('title-form').innerHTML = "Cadastro de novo Usuário";
    document.getElementsByName("action")[0].value = "create";
    for(x=0;x<input.length-1;x++){
        input[x].value = "";
    }
    for(x=0;x<option.length;x++){
    	option[x].selected = false;
    }
 }

btn.onclick = function() {
    modal.style.zIndex = 1;modal.style.top = 0;
    modal.style.background = "rgba(0,0,0,0.8)";
    colore();
}

close.onclick = function() {
	clearContents();
}

window.onclick = function(event) {
    if (event.target == modal) {
        clearContents();
    }

}

//extra
function colore () {
    var square = document.getElementById("title");
    square.style.backgroundColor = "#00bfff";
    setTimeout(limpaCor, 2000);
}
  
  function limpaCor () {
    var square = document.getElementById("title");
    square.style.backgroundColor = "transparent";
    setTimeout(colore, 2000)
 }