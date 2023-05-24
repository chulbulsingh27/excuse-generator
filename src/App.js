import { useEffect, useState, createContext } from 'react';
import './App.css';
import Axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Menu } from './Pages/Menu';
import { Contact } from './Pages/Contact';
import { Navbar } from './Navbar';

// import User from './User';

// import { Task } from './Task';
//import { Text } from './Text';
//fetch returns a promise
// fetch("https://catfact.ninja/fact").then((res) => res.json())
// .then((data) => {
//   console.log(data);
// })
export const AppContext = createContext();
function App() {
  const [username, setUserName] = useState("chulbul");
  // const [value, setValue] = useState("");
  // const fetchPartyData = (excuse) => {
  //   Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then((res) => {
  //     setValue(res.data[0].excuse);
  //   })

  // }
  // const [ageValue,setAgeValue] = useState(null);
  // const fetchData = () => {
  //   Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
  //     setAgeValue(res.data);
  //   });
  // }
  // useEffect(() => {
  //   fetchData();
  // },[])
  //const [catFact,setCatFact] = useState("");
  // fetch("https://catfact.ninja/fact").then((res) => res.json())
  //   .then((data) => {
  //     console.log(data);
  //   })
  // const catFactFunction = ()=> {
  //   Axios.get("https://catfact.ninja/fact").then((res) =>{
  //     setCatFact(res.data.fact)
  //   });
  // }
  // useEffect (()=> {
  //   catFactFunction();
  // },[])

  // const [todoList, setTodoList] = useState([]);
  // const [newTask, setNewTask] = useState("");
  // const handleChange = (event) => {
  //   setNewTask(event.target.value);
  // }
  // const deleteTask = (id) => {
  //   const newTodoList = todoList.filter((task) => {
  //     return task.id !== id;
  //   });
  //   setTodoList(newTodoList);
  // }
  // const addTask = () => {
  //   const task = {
  //     id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
  //     taskName: newTask,
  //     completed: false,
  //   };
  //   const newTodoList = [...todoList, task];
  //   setTodoList(newTodoList);
  // }
  // const completeTask = (id)=>{
  //   setTodoList(todoList.map((task) =>{
  //     if(task.id === id){
  //       return {...task,completed:true}
  //     } else{
  //       return task;
  //     }
  //   }))-
  // }

  //const [showText, setShowText] = useState(true);
  return (
    <div className=" App mt-10">
      <AppContext.Provider value={{username,setUserName}}>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home  />} />
            <Route path='/menu' element={<Menu  />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<h1>Page not found </h1>} />
          </Routes>
        </Router>
      </AppContext.Provider>
      {/* <h1 className='text-lg subpixel-antialiased'>Generate an excuse</h1>
      <button className='border-2 mt-6  p-2 bg-blue-400 rounded-md'onClick={() => fetchPartyData("party")}>Party</button>
      <button className='border-2 mt-6  p-2 bg-blue-400 rounded-md' onClick={() => fetchPartyData("family")}>Family</button>
      <button className='border-2 mt-6  p-2 bg-blue-400 rounded-md' onClick={() => fetchPartyData("office")}>Office</button>
      <p className='text-blue-600'>{value}</p> */}
      {/* <input className='border-2 border-black p-3' placeholder='type here ..' onChange={(event) => {
        setName(event.target.value);
      }}></input>
      <button className='border-2 mt-6  p-2 bg-blue-400 rounded-md' onClick={fetchData}>Predict Your Age</button>
      <h1>Name : {ageValue?.name}</h1>
      <h1>Predicted Age : {ageValue?.age}</h1>
      <h1>Count : {ageValue?.count}</h1> */}
      {/* <button className='border-2 mt-6  p-2 bg-blue-400 rounded-md' onClick={catFactFunction}>Generate Cat Fact</button>
      <p>{catFact}</p> */}
      {/* <button
        onClick={() => {
          setShowText(!showText);
        }}
      >
        Show Text11
      </button>
      {showText && <Text />} */}
      {/* <div className="addTask" >
        <input className='border 2px divide-solid' onChange={handleChange}></input>
        <button onClick={addTask}> Add Task</button>
      </div>
      <div className="list mt-3">
        {todoList.map((task) => {
          return (
            <Task
              taskName={task.taskName}
              id={task.id}
              completed={task.completed}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          );
        })}
      </div> */}
    </div>
  );
}
export default App;
