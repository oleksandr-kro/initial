export class CommentService{

    _url = 'https://jsonplaceholder.typicode.com'

    async   getAllComments(){
        return  await  fetch(`${this._url}/comments`).then(value => value.json());
    };

}
