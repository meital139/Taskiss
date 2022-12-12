import './App.css';
import "./fonts/Ubuntu-Bold.ttf";
import "./fonts/Ubuntu-Light.ttf"
import {useState} from 'react';
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom';
import Menu from './components/Menu';
import AddTask from './components/AddTask';
import AllTasks from './components/AllTasks';
import Title from './components/Title';
import Task from './components/Task';
import Homepage from './components/Homepage';


function App() {
  
  // comment test 2
  // const [tasks,setTasks] = useState([{task:'Do dishes',status: false}, {task:'dog',status: false}]);
  const [tasks,setTasks] = useState([]);

  const addNewTask=(taskName,taskDetails,taskTime,taskEndTime) =>{ 
    let newTask = {
      task:taskName,
      details:taskDetails,
      status: false,
      time: taskTime,
      timeToEnd: taskEndTime
    }
    setTasks([...tasks,newTask]);
    console.log(tasks);
    console.log(taskEndTime);
    alert('Task added to list')
  } 

  const remove = (index)=>{
    let tempTasks = [...tasks]; 
    tempTasks.splice(index,1);
    setTasks([...tempTasks]) 
    alert('Task has Removed');
  }

  return (
    <div className="App">
      <Title/>
      <BrowserRouter> 
        <Menu/>
          <Routes>
            <Route path='/' element={<Homepage tasksArr={tasks} remove={remove}/>}/>
            <Route path='/add-task' element={<AddTask add={addNewTask}/>}/>
            <Route path='/tasks' element={<AllTasks tasksArr={tasks} remove={remove}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
