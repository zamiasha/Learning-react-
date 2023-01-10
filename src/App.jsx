import logo from './logo.svg';
import './App.css';
import User from './components/User';

function App() {
    let data="Ali";
    function apple()
    {
        data="petter";
        alert(data)
    }
    return ( 
        <div className="App">
        <h1> {data} </h1>
        <button onClick={apple}>Click me</button>
        <User />
       
       </div>
    );
}



export default App;