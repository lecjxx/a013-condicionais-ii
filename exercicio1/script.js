//Crie um código que receba um número por **prompt**
// e verifique se um número é divisível por 2 **ou** por 3

const num = Number (prompt ("Digite um número"))

// usando ifs aninhados 

if (num % 2 === 0){
    if (num % 3 === 0){
        console.log("O número é divisível por 3");
    }else{
    console.log(" número é divisível por 2 mas n é por 3");}
}else if (num % 3 === 0) {
    console.log(" número é divisível por 3") 
}
else{
    console.log("O número não é divisivel nem por 2 e nem por 3") 
}

// usando operadores lógicos 

if (num % 2 === 0){
    console.log(" número é divisível por 2")
}if(num % 3 === 0){
    console.log(" número é divisível por 3")
}else{
    console.log("O número não é divisivel nem por 2 e nem por 3!");
}
