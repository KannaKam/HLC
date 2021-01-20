import {Request,Response } from "express";
//nos creamos una clase para no tenerlo en el archivo usuario.rutas.ts
// en ese solo llamariamos a esta función
class userController{
getSaludo(req:Request,res:Response){
// aquí haría el proceso para que el usuario pueda hacer lo que quiera
// solo redirige
const name=req.query.name||'desconocido';
res.send({
status:'ok',
name:'Hello '+name,
message:'hello'
})
}
testPost(req:Request,res:Response){
    console.log('el body',req.body)
    let params=req.body;
    if(!params.user){
    res.status(200).send({
    status:'ok',
    message:'The user is mandatory'
    })
    }
    res.send({
    status:'ok',
    })
    
}
//hay que exportarla para que se vea en otros sitios

}
export default userController