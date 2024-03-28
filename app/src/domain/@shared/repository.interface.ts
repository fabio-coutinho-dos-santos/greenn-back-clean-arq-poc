export interface RepositoryInterface<T> {
	create();
	findOne(id: number);
}
