const Producto = require('./models/Task');

const resolvers = {
    Query: {
        Hello: () => "Hello",
        getAllProducto: async()=>{
            const productos = await Producto.find();
            return productos
        },
        async getProducto(_,{id}){
            const producto = await Producto.findById(id)
            return producto
        }
    },

    Mutation: {
        createProducto: async(_, args) =>{
            const {title, description, price} = args.producto;
            const newProducto = new Producto({title, description, price});
            await newProducto.save();
            return newProducto
        },
        async deleteProducto(_, {id}){
            await Producto.findByIdAndDelete(id);
            return "User Delete";
        },
        async updateProducto(_, {producto, id}){
            const productoUpdated = await Producto.findByIdAndUpdate(id, {
                $set: producto
            }, {new: true})
            return productoUpdated
        }
    }
};

module.exports = { resolvers }