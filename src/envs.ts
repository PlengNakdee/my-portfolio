import { Environment } from '@aws-cdk/core';

export const cicdEnv: Environment = {
  account: '',
  region: 'ap-southeast-1',
};

export const stageEnv: Environment = {
  account: '483297557526',
  region: 'ap-southeast-1',
};

export const prodEnv: Environment = {
  account: '',
  region: 'ap-southeast-1',
};