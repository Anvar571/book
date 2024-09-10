
export class BaseEntity<M> {
    private data!: M & { id: string };

    constructor(data?: M) {
        Object.defineProperty(this, 'data', {
            value: data,
            writable: true
         })
    }

    public get id() {
        return this.data.id;
    }

    public set id(id: string) {
        this.data.id = id;
    }
}