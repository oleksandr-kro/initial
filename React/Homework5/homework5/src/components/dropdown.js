import {useEffect, useState} from "react";
import './style.css'


export default function  Dropdown(item) {

    let arrNum = item.item

    const _url =`https://jsonplaceholder.typicode.com`
    const [user, setUser] = useState(null);
    const [dropdownIsOpen, setIsOpen] = useState(false);
    const [selectedOption, setOption] = useState('');
    const toggleDropdown = ()=>{
        setIsOpen((prevValue)=>!prevValue)

    }
    const users = async (count)=> {
        const response = await fetch(`${_url}/users/${count}`);
        const data = await response.json();
        setUser(data)
    }
    useEffect(()=> {
        users(selectedOption)
    }, [selectedOption])



   const selectedValue = (num)=> {
       setOption(num)
       if (user){
           setIsOpen((prevValue)=>!prevValue)
       }
   }

    return(
        <div className={'wrapper'}>
            <input  type="submit" onClick={toggleDropdown} value={selectedOption || 'choose user' }/>
            {!!dropdownIsOpen &&
                <div className={'numList'}>
                    {arrNum.map(num=>(
                        <ul key={num} onClick={()=>selectedValue(num)}>
                            <li style={{backgroundColor: num === selectedOption ? "red": 'white'}}>{num}</li>
                        </ul>
                    ))}

                </div>
            }
            {!!user &&
               <div className={'userWrapper'}>
                   {user.id}  {user.name}  {user.email}
               </div>
            }
            <div>

            </div>
        </div>

)
}
