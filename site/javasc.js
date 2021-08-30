function ClicouBotao (buttonClicado){
    //alert("Botão clicado!!!"); 
    
    //elementoParagrafo = document.createElement("p");   
    //elementoParagrafo.ennerHTML = "Texto do paragrafo";
    
    paragrafo1 = document.getElementById("paragrafo");
    paragrafo1.innerHTML = "Valor modificado";

    elementosLaranjas = document.getElementsByClassName("paragrafoslaranjas");
    for (i = 0; i < elementoslaranjas.lenght; i++){
        elementosLaranjas[i].style = "background: black";
    }

    variavel = {
        "atributo" : 'valor',
        "atributo2" : 'valor2'
    };
    variavel['novoAtributo'] = 'novoValor';
    
    console.log (variavel);

}