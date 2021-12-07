import React, {useState} from 'react';
import trashIcon from './trash-bin.png';



function App() {

  const[userInput, updateUserInput] = useState("");
  const[toDoList, updateToDoList] = useState([]);

  const addItems = () => {
    toDoList.push({description: userInput})
    updateToDoList(toDoList)
    updateUserInput("")
  }

  const deleteTask=(index)=>{
    const newList = toDoList.filter((item,i) => i!==index);
    updateToDoList(newList)
  }

  return (
   <div className ="app-background">
     <p className="heading-text">React To Do List 🔥</p>
     <div className="task-container">
     <div>
       <input className="text-input" value={userInput} onChange={(event)=>updateUserInput(event.target.value)} />
       <button className="add-button" onClick={addItems}>ADD</button>
     </div>
     {toDoList?.length ? toDoList.map((toDoObject, index)=>  <ListItem index={index} itemData ={toDoObject} 
       deleteTask={deleteTask}
     /> ):
     <p className="no-item">📌 No Task Added! </p>
     }
     </div>
     <p className="footer-text">React Learning Dev</p>
   </div>
  );
}

const ListItem = (props) =>{
  return(
    <div className="list-item">
      <span>{props.itemData.description}</span>
      <img className="delete-icon" src={trashIcon} alt="icon" onClick={()=>props.deleteTask(props.index)}/>
    </div>
  )
}

export default App;
