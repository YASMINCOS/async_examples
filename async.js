//callback

function buscarUsuario(callback){
    console.log("buscando usuario");
    setTimeout(() => {
        const usuario = {id:1, nome:"maria"};
        console.log("usuario carregado");
        callback(usuario);
    },2000);

    console.log("continua");
}

buscarUsuario((usuario) =>{
    console.log("usuario", usuario);
})
//promise
function buscarUsuario(){
    console.log("Buscando usuario");
return new Promise ((resolve, reject)=>{
    setTimeout(()=>{
        const usuario = {id:null, name: "maria"};
        if(usuario.id){
            console.log("usuario encontrado");
            resolve(usuario);

        }else{
            reject("usuário invalido");
        }
    },2000);
})
  
}

buscarUsuario().then((usuario) =>{
    console.log("usuario", usuario);
}).catch((erro)=>{
    console.log("erro ao buscar usuario");
})

console.log("continua");
