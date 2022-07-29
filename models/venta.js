const {Schema,model} = require('mongoose');

const VentaSchema = Schema({
    fecha:{
        type:String,
        required:[true,'El nombre es obligatorio'],
        unique:true
    },
    hora: {
        type:String,
        required:[true,'El nombre es obligatorio'],
    },
    productos:{

    }
})

module.exports = model('Venta',VentaSchema);