const productos = [
    {nombre:'producto1',id:'1234',precio:'50',cantidad:'0'},
    {nombre:'producto1',id:'1235',precio:'60',cantidad:'1'},
    {nombre:'producto1',id:'1236',precio:'70',cantidad:'2'},
    {nombre:'producto1',id:'1237',precio:'80',cantidad:'3'}
]

function verificarCompra(id,cantidad){
    return new Promise((resolve,reject)=>{
        const ids=productos.find((usr)=> usr.id===id && usr.cantidad>=cantidad);
        if(ids){
        
            resolve(ids);
            usr.cantidad-=cantidad;
        }else{
            
            reject('lo lamento el producto que elejiste es no esxiste o no hay productos disponibles  ');
        }
    });
}

async function iniciarCompra(id,cantidad){
    try{
        const usuario=await verificarCompra(id,cantidad);
        console.log('Pedido realizado producto '+usuario.nombre+' cantidad: '+usuario.cantidad )
    }catch(error){
        console.log('lo lamento el producto que elejiste es no esxiste o no hay productos disponibles ');
    }
    
}

iniciarCompra('1236','1');
