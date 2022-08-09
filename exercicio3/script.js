//código a ser reescrito
/*
if(nome === "José"){
	console.log("Oi, Zé!");
} else {
	console.log("Olá, "+nome);
}

if(idade >= 18){
	console.log("pode tirar carteira de motorista!");
} else {
	console.log("Ainda não pode tirar carteira de motorista");
}*/

//if ternário

const nome = prompt("Qual é seu nome?")
const idade = prompt("Quantos anos você tem?")

nome === "José" ? console.log("Oi, Zé!") : console.log("Olá, "+nome);

idade >= 18 ? console.log("pode tirar carteira de motorista!"):console.log("Ainda não pode tirar carteira de motorista");
