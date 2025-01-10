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
