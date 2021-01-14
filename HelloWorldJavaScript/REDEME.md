Aprendendo Java Script 

Com uma estrutura de HTML5 criada(cujo nome é: index.html);

<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="utf-8">
        <title>my page</title>
        <script type="text/javascript" src="js/main.js"> </script>
    </head>
    <body onload="load()">
        <button type="button" onclick="clicou()">Click aqui</button>
        <p id="agradecimento" onclick="redirecionar()"></p>
        <p /*id="movimentoMouse"*/ onmouseover=trocar(this) onmouseout=voltar(this)>Passe o mouse aqui</p>
        <p /*id="movimentoMouse"*/ onmouseover=trocar(this) onmouseout=voltar(this)>Passe o mouse aqui</p>
        <select onchange= funcaoChange(this)>
            <option value="1"> Valor 1</option>
            <option value="2"> Valor 2</option>
            <option value="3"> Valor 3</option>
        </select>
    </body>

Onde primiro anunciamos o tipo de pagina: HTML
começamos o "<html>" já avisando a linguagem do site. Criamos a cabeça e o corpo, respectivamente: head e body. O "meta charset" para definir compatibilidade com os caractares necessários(utf-8). E o principal,  o link com o arquivo ".js" que criamos (no caso "main.js", dentro da pasta "js""), para relacionar os dois arquivos precismos do:

<script type="text/javascript" src="js/main.js"> </script> 

"type" declarando ser  "text/javascript" e "src" linkando o local do arquivo ".js"

agora no arquivo ".js" podemos ter o uso de funções para alterar o html enquanto em execussão;


function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
    //document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.("agradecimento"));
    //alert("Botão clicado");
}

function redirecionar(){
    window.open("https://github.com/Igorltdz");
    //window.location.href="https://github.com/Igorltdz";
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse ";
    //document.getElementById("movimentoMouse").innerHTML = "Obrigado por passar o mouse ";
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
    //document.getElementById("movimentoMouse").innerHTML = "Passe o mouse aqui";
}
function load(){
    console.log("loaded body")
}

function funcaoChange(elemento){
    console.log(elemento.value)
}

funcções essas que agora só precisão ser chamadas, e são dentro da body no HTML.
