
const nacionalidade = prompt("digite aqui o país que você nasceu")//.toLowerCase();


if(nacionalidade === "Brasil"){
   // console.log("Você é brasileiro(a)!");
} else if(nacionalidade === "Argentina"){
  //  console.log("Você é argentino(a)!");
} else if(nacionalidade === "uruguaia"){
  //  console.log("Você é uruguaio(a)!");
} else if(nacionalidade === "Chile"){
  //  console.log("Você é chileno(a)!");
} else if(nacionalidade === "Colombia"){
   // console.log("Você é colombiano(a)!");
} else{
  //  console.log("nacionalidade não encontrada")
}


switch (nacionalidade) {
    case "Brasil":
        console.log("Você é brasileiro(a)!");
        break;
    case "Argentina":
        console.log("Você é argentino(a)!");    
        break;
    case "Uruguai":
        console.log("Você é uruguaio(a)!");        
        break;
    case "Chile":
        console.log("Você é chileno(a)!");           
        break;
    case "Colombia":
        console.log("Você é colombiano(a)!");           
        break;
    default: 
    console.log("Nacionalidade não encontrada");
        break;
}