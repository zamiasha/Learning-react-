import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Uses from './components/Uses'
import MemberUses from './components/MemberUses'


function App() { 
    

     const [list, setList] = useState([]);
     const [input, setInput] = useState("");


     const addTodo = (todo) => {
         const newTodo = {
            id: Math.random(),
            todo: todo
         }

         //add todo  to  the  list
         setList([...list, newTodo])


         //clear input  box
         setInput("");


         
         }
         const deleteTodo = (id) => {
            //filter out the todo with id  

            const  newList = list.filter((todo) => todo.id !== id);


            setList(newList);
     }

    return (
        <div className="App">         
              <h1>Listing</h1>

              <input type="text" value={input} onChange={(e) =>setInput(e.target.value)} />
              <button onClick={() => addTodo(input)}>Add</button>
              <ul className='liui'>
                {list.map((todo) => (
                    <li key={todo.id}>
                    {todo.todo}
                     <button onClick={() => deleteTodo(todo.id)}>&times;</button>
                    </li>
                ))}
              </ul>
        </div>
    )
}
    
    //    function getData() {
    //     alert("hellow from app")
    //    }
    // return ( 
        // <div className="App">
        // <h1>Pass Function as Props ) 😯</h1>

        // <Uses data={getData} />

        // <div className="Member-Uses">
        // <MemberUses data={getData} />
        // </div>
        
  
      
//        </div>
//     );

// }



export default App;