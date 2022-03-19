const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/dealers_choice_full_stack');


const syncAndSeed = async () => {
  await sequelize.sync({force: true});
}

syncAndSeed();