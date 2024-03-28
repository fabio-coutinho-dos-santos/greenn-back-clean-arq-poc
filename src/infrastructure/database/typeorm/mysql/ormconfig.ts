export function ormConfig(): any {

  const NODE_ENV = process.env.NODE_ENV;

  if(NODE_ENV === 'test') {
    return {
      type: 'sqlite',
      database: ':memory:',
      synchronize: true,
      logging: false,
      autoLoadEntities: true,
    };
  } else {
    return {
      type: 'mysql',
      url: 'mysql://user:password@localhost:3302/db',
      synchronize: true,
      logging: false,
      autoLoadEntities: true,
    };
  }


}
