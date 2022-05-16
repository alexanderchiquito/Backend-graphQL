const { connect } = require('mongoose');

const connectDB = async() =>{
    try{
        await connect('mongodb://127.0.0.1/tasksdb');
        console.log('MongoDB Connectdb')
    }catch (error){
        console.error(error);
    }
};

module.exports = {connectDB};