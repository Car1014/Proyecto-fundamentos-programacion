
let salir=2;
let opc;

let a;
let b;


function suma(a, b){
    return a + b;
} 


function resta(a, b){
    return a - b;
} 

function multiplicar(a, b){
    return a + b;
} 

function dividir(a, b){
    return a + b;
} 




do{
    opc= prompt("Calculadora \n opciones \n 1--sumar dos numeros \n 2--- restar dos numeros \n 3--- multiplicar dos numeros \n 4---- dividir dos numeros ");
    
    a=parseInt(prompt("Ingresa el numero a:"));
    b=parseInt(prompt("Ingresa el numero b:"));
    
    if(opc==1){
        resultado1=suma(a,b)
        alert("EL resultado de sumar "+a+"+"+b+" es:"+resultado1);
    } else if(opc==2){
        resultado2=resta(a,b)
        alert("EL resultado de resatr "+a+"-"+b+" es:"+resultado2);
    } else if(opc==3){
        resultado3=multiplicar(a,b)
        alert("EL resultado de multiplicar "+a+"*"+b+" es:"+resultado3);
    }else if(opc==4){
        resultado4=dividir(a,b)
        alert("EL resultado de dividir "+a+"/"+b+" es:"+resultado4);
        
    }else{
        alert("Error rango equivocado");
    }

    
    
    salir=prompt("1 ------- salir \n 2--------otra operacion");

}while(salir!=1);