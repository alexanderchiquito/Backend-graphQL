const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type Producto{
        id: ID
        title: String
        description: String
        price:String
    }
    type Query{
        Hello: String
        getAllProducto: [Producto]
        getProducto(id: ID): Producto
    }

    input ProductoInput{
        title: String
        description: String
        price:String
    }
    type Mutation{
        createProducto(producto: ProductoInput!): Producto
        deleteProducto(id: ID!): String
        updateProducto(id: ID!, producto: ProductoInput): Producto
    }
`
module.exports = {typeDefs}