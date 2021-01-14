

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

/*
function soma(n1, n2){
    return n1+n2;
}

function validade (idade){
    var validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
};
var idade = prompt("Qual sua idade");
console.log(validade(idade));

//alert(soma(5, 10));

*/


/*
var d  = new Date();
console.log("Hoje é " + d.getDate() + "/" + (d.getMonth()+1));
*/

/*
var d= new Date();
alert(d);
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes( ));
*/

/*
var count;
for(count=0; count <=5; count++){
    alert(count);
};
*/


/*
var count = 0;
while (count <= 5){
    console.log(count);
    alert (count);
    count ++;    
};
*/


/*
var idade = prompt("Qual sua idade?");
if (idade >= 18){
    alert ("Maior de idade!");
}
else {
    alert("Menor de idade");
}; */

//var frutas = [{nome: "maçã", cor:"vermelha"}, {nome: "uva", cor:"roxa"}];
//console.log(frutas);
//alert(frutas[0].nome);
//alert(frutas[0].cor);


/* var fruta = {nome: "maçã", cor:"vermelha"};
console.log(fruta);
alert(fruta.nome);
alert(fruta.cor); */


//var lista = ["maçã", "pera", "laranja"];
//console.log(lista); 
//lista.push("uva");
//console.log(lista);
//lista.pop();
//console.log(lista);
//console.log(lista.length);
//console.log(lista.reverse())


//var nome = "Igor Luan";
//var idade = 18;
//var idade2 = 9;
//var frase = "Japão é o melhor time do mundo";
//alert(nome+" tem" + idade +  " anos.");
//alert(idade**idade2);
//console.log(nome);
//console.log(idade+idade2);
//console.log(frase.replace ("Japão", "Brasil"));
//alert(frase.replace("Japão", "Brasil"));
//alert(frase.toUpperCase());
//alert(frase.toLowerCase());
