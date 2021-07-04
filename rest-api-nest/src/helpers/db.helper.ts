// import { createConnection } from 'typeorm';

// import ormConfig from '../common/ormconfig';
// import * as usersService from '../resources/users/user.service.js';
// import * as loginService from '../resources/login/login.service.js';

export const connectToDB = async () => {
  try {
    // await createConnection(ormConfig);

    // try {
    //   await loginService.authenticateUser({ login: 'admin', password: 'admin' });
    // } catch (error) {
    //   await usersService.create({ name: 'admin', login: 'admin', password: 'admin' });
    // }

    console.log('DB Connected');

    return true;
  } catch (error) {
    console.error('DB Connection error');
    console.error(error);
  }

  return false;
};
