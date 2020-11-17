
import './App.css';
import Dropdown from "./components/dropdown";



function App() {
  const arr =[1,2,3,4,5,6,7,8,9,10]

  return (
    <div>
      <div> <Dropdown item ={arr}/></div>
    </div>
  );
}

export default App;
