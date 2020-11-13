export class PostService{

    _url = 'https://jsonplaceholder.typicode.com'

    async   getAllPosts(){
        return  await  fetch(`${this._url}/posts`).then(value => value.json());
    };
    async   getPostWithId(id){
        return  await  fetch(`${this._url}/posts/${id}`).then(value => value.json());
    };

}
