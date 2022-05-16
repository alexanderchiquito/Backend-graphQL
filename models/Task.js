const {Schema, model} = require('mongoose');

const productoSchema =  new Schema({
    title:{
        type: String,
        require: true,
    },
    description:String,
    price:String,
});

module.exports =  model('Producto', productoSchema);