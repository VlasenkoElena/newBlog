export class Post {
   constructor (
    public body: string,
    public image?: string,
    public id?: number,
    public user?: {
        id: number
    }) {}
}
