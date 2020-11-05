export default function Comment(props) {
    let {id, body, name} = props.item
    return (

            <div>
                <p><b>{id}</b> </p>
                <p>name: {name}</p>
                <p>body: {body}</p>
                <hr/>
            </div>

    )
}
