export function ormConfig(): any {
  return {
    // type: 'mysql',
    // url: 'mysql://user:password@localhost:3302/db',
    type: 'sqlite',
    database: ':memory:',
    synchronize: true,
    logging: false,
    autoLoadEntities: true,
  };
}
