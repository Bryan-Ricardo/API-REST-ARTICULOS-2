const {Schema,model} = require('mongoose');

const CarritoSchema = Schema({
    nombre:{
        type:String,
        required:[true,'El nombre es obligatorio'],
        unique:true
    },
    img:{
        type: String,
        default: "Sin imagen"
    },
    precio:{
        type: Number,
        required:[true,'El precio es obligatorio'],
    },
    precioTotal:{
        type: Number,
        required:[true,'El precio es obligatorio'],
    },
    cantidad:{
        type: Number,
        required:[true,'La cantidad es obligatoria'],
    },
    cantidadMax:{
        type: Number,
        required:[true,'La cantidad es obligatoria'],
    },
    descripcion:{
        type: String,
        default: "Sin descripcion"
    },
})

module.exports = model('Carrito',CarritoSchema);