import Usuario from "../models/Usuario.js";

export async function telaaddusuario(req,res){
    res.render('usuario/add')
}

export async function addusuario(req,res){
    const usuario = new Usuario({
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha,
        foto: req.body.foto
    })
    await usuario.save();
    res.send("Usuario Cadastrado com sucesso!")
}

export async function listarusuarios(req,res){
    
}

export async function filtrarusuarios(req,res){
    
}

export async function telaedtusuario(req,res){
    
}

export async function edtusuario(req,res){
    
}

export async function deleteusuario(req,res){
    
}
