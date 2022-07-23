const {Schema,model} = require('mongoose');

const VentaSchema = Schema({
    fecha:{
        type:String,
        required:[true,'El nombre es obligatorio'],
    },
    productos:{
        type: JSON
    },
    estado:{
        type:Boolean,
        default: true
    }
})

module.exports = model('Venta',VentaSchema);