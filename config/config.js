const config = {
    app: {
        port: process.env.PORT || 9000
    },
    //Replace With Your Config 
    db: {
        host: 'localhost',
        port: 27017,
        name: 'noddy'
    },
};

module.exports = config;
