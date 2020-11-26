 import {connect} from 'react-redux';



export  default function  ReduxTest ({count}){
    return(
        <div>
            <h2>{count}</h2>
        </div>
    )
}

 export  default connect(mapStateToProps)(ReduxTest)
