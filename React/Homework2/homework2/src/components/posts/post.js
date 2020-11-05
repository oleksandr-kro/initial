export default function Post(props){
    let {id,title,body} = props.item;

    return (

        <div>
<p><b>{id}</b> </p>
<p>title: {title}</p>
<p>body: {body}</p>
<hr/>
        </div>



    )
}

