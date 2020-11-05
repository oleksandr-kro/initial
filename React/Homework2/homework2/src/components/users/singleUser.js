import user from "./user";

export default function SingleUser(props) {
let {id, name, email} =props.item

    return (

        <div>
           {id}  {name}  {email}
        </div>



    )
}
