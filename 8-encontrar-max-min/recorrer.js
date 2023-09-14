
let arreglo=[12,34,73,978,34,65,54];


let p=Number.MAX_SAFE_INTEGER;
let m=0;

for(i=0;i<7;i++){
    if(arreglo[i]<p){
        p=arreglo[i];
    }
    if(arreglo[i]>m){
        m=arreglo[i];
    }
}

alert("Mayor: "+m+"\n Menor: "+p);