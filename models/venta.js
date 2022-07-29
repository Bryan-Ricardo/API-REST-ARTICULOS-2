const {Schema,model} = require('mongoose');

const VentaSchema = Schema({
    fechaCompleta:{
        type:String,
        required:[true,'El nombre es obligatorio'],
        unique:true
    },
    fecha:{
        type:String,
        required:[true,'El nombre es obligatorio'],
    },
    hora: {
        type:String,
        required:[true,'La hora es obligatoria'],
    },
    total:{
        type: Number,
        required:[true,'El total es obligatorio'],
    },
    productos:{

    }
})

module.exports = model('Venta',VentaSchema);