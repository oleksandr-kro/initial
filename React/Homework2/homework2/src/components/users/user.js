export default function User(props) {
let oneUserById = props.getOneUserById;
let {id,name,email} = props.item;



    return (

    <div>
        {id} {name} {email}
        <button onClick={()=>oneUserById(id)}>Get this one</button>

    </div>



    )
}
