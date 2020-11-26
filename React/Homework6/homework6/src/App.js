// // import {useState, useMemo, memo, useCallback, useReducer} from "react";
import {connect} from 'react-redux';
// // // const Test = memo(({onClickHandler})=>{
// // //   console.log('test rendered')
// // //   return <h1 onClick={onClickHandler}>Hello from test</h1>
// // // });
// // // const TestMemo = memo(()=>{
// // //     console.log('test memo')
// // //     return <h1>Hello from test memo</h1>
// // // });
// //
// //
// //
    function App(props) {
        console.log(props)
// //   // const initialState = {count:0};
// //   // const reducer = (state, action)=>{
// //   //     switch (action.type) {
// //   //         case 'increment':
// //   //             console.log(action.payload)
// //   //             return {count: state.count + 1};
// //   //         case 'decrement':
// //   //             return {count: state.count - 1};
// //   //         default:
// //   //             throw new Error();
// //   //     }
// //   //       }
// //   // // const  [array, setArray] = useState([]);
// //   // // const  [cycles, setCycles] = useState(20);
// //   // const [count,setCount] = useState(0);
// //   // const [state, dispatch] = useReducer(reducer, initialState);
// //
// //   // const onClickHandler = useCallback(() => {
// //   //     console.log( 'parents click handler ')
// //   // },[]) ;
// //   //
// //   //
// //   // const calculateHardStuff=(cycleCount)=> {
// //   //   let counter =0;
// //   //  for (let i=0; i < cycleCount; i++){
// //   //    counter++;
// //   //     console.log(`i was called from loop ${i}`)
// //   //
// //   //   }
// //   //   return counter
// //   // }
// //   //
// //   // const someAplicatedVaue = useMemo(()=>calculateHardStuff(cycles),[]);
// //
// //
// //
// //
    return (
// //
// //
// //
// //       {/*<button onClick={()=>{*/}
// //       {/*  setArray([...array, 1])*/}
// //       {/*}}>addEl</button>*/}
// //       {/*  <div>*/}
// //       {/*    <p>{someAplicatedVaue}</p>*/}
// //
// //       {/*      /!*{array.map(el=>(*!/*/}
// //       {/*      /!*    <p key={Math.random() * (100 - 1 + 1)} style={{display: 'inline-block'}}>{el}</p>*!/*/}
// //       {/*      /!*))}*!/*/}
// //       {/*  </div>*/}
// //       {/*/!*<Test onClickHandler={onClickHandler}/>*!/*/}
// //       {/*<TestMemo/>*/}
// //     </div>
        <div>
            <button onClick={props.incCounter}>incCounter</button>
            <button onClick={props.decCounter}>decCounter</button>

            count:{props.count}
        </div>
  )

}
const mapStateToProps=(state)=>{
    console.log(state)
    return{count:state.count};
};
const mapDispatchToProps=(dispatch)=>{

    return {
        incCounter:()=>dispatch({type:'increment'}),
        decCounter:()=>dispatch({type:'decrement'})
    }
}

export default  connect(mapStateToProps,mapDispatchToProps)(App);
