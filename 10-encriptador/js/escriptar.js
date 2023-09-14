const texto=document.querySelector('textarea');

function desencriptar(){
    
    

    let desifrar=texto.value
    .replace(/enter/gi,"e")
    .replace(/imes/gi,"i")
    .replace(/ai/gi,"a")
    .replace(/ober/gi,"o")
    .replace(/ufat/gi,"u");

    document.getElementById("resultados").innerHTML=desifrar;
}

function encriptar(){

    let solve='';

  

  for(i=0;i<texto.value.length;i++){

        if(texto.value[i]==='e'){
            solve=solve+'enter';
            continue

        }

        if(texto.value[i]==='i'){
            solve=solve+'imes';
            continue
        }
        if(texto.value[i]==='a'){
            solve=solve+'ai';
            continue

        }
        if(texto.value[i]==='o'){
            solve=solve+'ober';
            continue

        }
        if(texto.value[i]==='u'){
            solve=solve+'ufat';
            continue

        }


        solve=solve+texto.value[i];
        


  }


  document.getElementById("resultados").innerHTML=solve;
    

}


