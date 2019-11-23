// const mongoose = require('mongoose');
// const MONGO_USERNAME = 'xxxxx';
// const MONGO_PASSWORD = 'xxxxxxx';
// const MONGO_HOSTNAME = '127.0.0.1';
// const MONGO_PORT = '27017';
// const MONGO_DB = 'sharkinfo';

// const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;
// mongoose.connect(url, {useNewUrlParser: true});

// Setting these values to dynamically pick values at runtime 
const mongoose = require('mongoose');
const {
    MONGO_USERNAME,
    MONGO_PASSWORD,
    MONGO_HOSTNAME,
    MONGO_PORT,
    MONGO_DB
} = process.env;

const options = {
    useNewUrlParser: true,
    reconnectTries: Number.MAX_VALUE,       // Defines tries to reconnect to DB INDEFINITELY 
    reconnectInterval: 500,                 // Defines the period between connection attempts in milliseconds
    connectTimeoutMS: 10000,
};

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

mongoose.connect(url, options).then( function() {
    console.log('MongoDB is connected');
})
    .catch( function(err) {
    console.log(err);
});