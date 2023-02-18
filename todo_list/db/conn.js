const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('tododb','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

try{
    sequelize.authenticate();
    console.log('Conectado com sucesso!');
}catch(err){
    console.log(err);
}
module.exports = sequelize;