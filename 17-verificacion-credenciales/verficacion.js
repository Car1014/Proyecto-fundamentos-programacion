const usuarios = [
    {username:'usuario1',password:'1234'},
    {username:'usuario2',password:'1235'},
    {username:'usuario3',password:'1236'},
    {username:'usuario4',password:'1237'}
]

function verificarDatos( username,password){
    return new Promise((resolve,reject)=>{
        const usuario=usuarios.find((usr)=> usr.username===username && usr.password===password);
        if(usuario){
            resolve(usuario);
        }else{
            reject('Credenciales iconcorrectas ');
        }
    });
}

async function iniciarSesion(username,password){
    try{
        const usuario=await verificarDatos(username,password);
        console.log('inicio de sesion exitoso para el usario: '+usuario.username)
        alert('inicio de sesion exitoso para el usario: '+usuario.username)
    }catch(error){
        console.log('error usuario no encontrado');
        alert("Error datos incorrectos")
    }
    
}

nombre=prompt("Ingresa un nombre")
password=prompt("Ingresa tu constraseña")

iniciarSesion(nombre,password);