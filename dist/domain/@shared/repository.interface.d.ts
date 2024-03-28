export interface RepositoryInterface<T> {
    create(): any;
    findOne(id: number): any;
}
