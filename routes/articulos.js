//Importaciones extras
const {Router} = require('express');

//Dependencias
const multer = require('multer');


//Mis importaciones
const { articulosGet, articulosPut, articulosPost, articulosDelete ,articulosImagenPost,articulosImagenGet,carritoGet,carritoPut,carritoPost,carritoDelete} = require('../controllers/articulos');

const router = Router();
const storageStrategy = multer.memoryStorage();
const upload = multer({storage:storageStrategy})

/* Subiendo productos*/
router.get('/',articulosGet);

router.put('/:id',articulosPut);

router.post('/',articulosPost);

router.delete('/:id',articulosDelete);

/*Subir imagenes*/
router.post('/imagen',upload.single('imagen'),articulosImagenPost)

router.get('/imagen/:image',articulosImagenGet)

/*Carrito*/
router.get('/carrito',carritoGet);

router.put('/carrito/:id',carritoPut);

router.post('/carrito',carritoPost);

router.delete('/carrito/:id',carritoDelete);

module.exports = router;