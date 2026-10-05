const mongoose = require('mongoose'); 
 const URI = 'mongodb://diegogeffen1306_db_user:root@ac-fxvqqg2-shard-00-00.r0vszaw.mongodb.net:27017,ac-fxvqqg2-shard-00-01.r0vszaw.mongodb.net:27017,ac-fxvqqg2-shard-00-02.r0vszaw.mongodb.net:27017/prueba?ssl=true&replicaSet=atlas-ot8mn5-shard-0&authSource=admin&retryWrites=true&w=majority';
 mongoose.connect(URI)
     .then(db => console.log('DB is connected'))
     .catch(err => console.error(err));  
 module.exports = mongoose; 