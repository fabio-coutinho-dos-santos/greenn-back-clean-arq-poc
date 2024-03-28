import * as dotenv from 'dotenv';
dotenv.config();

export const API_CONFIG = {  
  API_PREFIX: process.env.API_PREFIX ?? 'api',
  API_VERSION:  process.env.API_VERSION ?? 'v1',
  SERVER_PORT:  process.env.SERVER_PORT ?? 3000
}