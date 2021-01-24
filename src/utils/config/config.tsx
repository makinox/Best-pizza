import * as dotenv from 'dotenv';
dotenv.config();

const config = {
  nodeEnv: process.env.NODE_ENV,
  armcareServerUrl: process.env.REACT_APP_SERVER_URL ?? '',
};

export {config};
