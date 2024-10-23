import express from 'express';
const router = express.Router();

import {
    telaaddusuario,
    addusuario,
    listarusuarios,
    filtrarusuarios,
    telaedtusuario,
    edtusuario,
    deleteusuario
} from '../controllers/admin.js'

//Rotas CREATE modelo Usuario 
router.get('/admin/usuario/add', telaaddusuario)
router.post('/admin/usuario/add', addusuario)

//Rotas READ modelo Usuario
router.get('/admin/usuario/lst', listarusuarios)
router.post('/admin/usuario/lst', filtrarusuarios)

//Rotas UPDATE modelo Usuario
router.get('/admin/usuario/edt/:id', telaedtusuario)
router.post('/admin/usuario/edt/:id', edtusuario)

//Rota DELETE modelo Usuario
router.get('/admin/usuario/del/:id', deleteusuario)

export default router;