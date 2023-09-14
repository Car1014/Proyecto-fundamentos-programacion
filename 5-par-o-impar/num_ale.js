function getRandom() {
    return Math.floor(Math.random()*100 +1);
  }

let aleatorio =getRandom();
  if(aleatorio%2==0){
    alert(aleatorio+ " Es par");
  }else{
    alert(aleatorio+ " Es impar");

  }