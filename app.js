const express = require('express');
const {ApolloServer} = require('apollo-server-express');

const {typeDefs} = require('./typeDefs')
const {resolvers} = require('./resolvers')

const {connectDB} = require('./db')

const app = express()
connectDB();

app.get('/', (req, res) => res.send('Welcome my bro'));

module.exports = app

async function start(){

    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers
    });

    await apolloServer.start();

    apolloServer.applyMiddleware({app})
   
    app.use('*', (req, res) => res.status(404).send('not Found'));

    app.listen(3000, ()=>{
        console.log('Server on Port', 3000)
    })
}

start()