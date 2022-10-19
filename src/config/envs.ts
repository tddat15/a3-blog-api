import path from 'path';

export function getOptional(name: string): string | null {
  return process.env[name] || null;
}

export function getRequired(name: string): string {
  const val = getOptional(name);

  if (!val) {
    throw new Error(`${name} environment variable is required.`);
  }
  return val;
}
export const config = {
  db: {
    synchronize: false,
    logging: getOptional('NODE_ENV') !== 'production',
    type: 'postgres',
    url: getRequired('TYPEORM_URL'),
    extra: {
      // number of milliseconds to wait before timing out when connecting a new client
      // 45 seconds
      connectionTimeoutMillis: 45000,
      // number of milliseconds a client must sit idle in the pool and not be checked out
      // before it is disconnected from the backend and discarded
      // 10 seconds
      idleTimeoutMillis: 10000,
      // maximum number of clients the pool should contain
      max: 30,
      connectionLimit: 30,
    },
    entities: [path.join(__dirname, '../../entity/**/*.entity.{js,ts}')],
  },
};
