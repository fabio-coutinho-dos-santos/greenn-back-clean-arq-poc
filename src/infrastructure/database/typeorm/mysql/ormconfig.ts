export function ormConfig(): any {
  return {
    type: 'mysql',
    // url: 'mysql://greenn:dgZLtMojAt3RJrFLai1X0qpL@localhost:3301/greenn',
    url: 'mysql://user:password@localhost:3302/db',
    synchronize: true,
    logging: false,
    autoLoadEntities: true,
  };
}
