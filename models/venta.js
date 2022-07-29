const {Schema,model} = require('mongoose');

const VentaSchema = Schema({
    fecha:{
        type:String,
        required:[true,'El nombre es obligatorio'],
        unique:true
    },
    productos:{
        
    }
})

module.exports = model('Venta',VentaSchema);