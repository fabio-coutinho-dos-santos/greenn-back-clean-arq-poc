import { Connection } from 'typeorm';
export declare class DatabaseService {
    private readonly connection;
    constructor(connection: Connection);
    getDbHandle(): Connection;
}
