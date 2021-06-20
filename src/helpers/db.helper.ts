import { createConnection } from 'typeorm';
import ormConfig from '../common/ormconfig.js';

export const connectToDB = async () => {
  try {
    await createConnection(ormConfig)
    console.log('DB Connected')
    return true
  } catch (error) {
    console.error('DB Connection error')
    console.error(error)
  }

  return false
}