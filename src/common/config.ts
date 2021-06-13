import dotenv from 'dotenv'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({
  path: path.join(__dirname, '../../.env')
});

export const AUTH_MODE = process.env['AUTH_MODE'] === 'true'
export const PORT = Number(process.env['PORT'] || 4000)
export const HOST = process.env['HOST'] || 'localhost'
export const { NODE_ENV, MONGO_CONNECTION_STRING, JWT_SECRET_KEY, } = process.env