

let texto;



do{

    texto=prompt("Ingresa una contraseña del almenos 10 caracteres")

    if(texto.length<10){
        alert("la contraseña es incorrecta vuelve a intentar");
    }


}while(texto.length<10);

alert("contraseña correcta")