require('dotenv').config({silent: true});
module.exports = {
  port: process.env.PORT || 4000,
  env: 'development',
  
  production: {

  },
  development: {
    db: {
      dialect: 'sqlite',
      storage: ':memory:',
      user: 'admin',
      password: 'password',
      
    }
  }
};
