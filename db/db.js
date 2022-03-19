const faker = require('faker');
const { Sequelize, STRING } = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/dealers_choice_full_stack');

const Color = sequelize.define('Color', {
  name:{
    type: STRING
  }
})

Color.createRandom = () => {
  return Color.create({name: faker.commerce.color()})
}


const syncAndSeed = async () => {
  await sequelize.sync({force: true});
  
  for(let i = 0; i < 10; i++){
    await Color.createRandom();
  }

}

module.exports = {
  Color,
  syncAndSeed
}