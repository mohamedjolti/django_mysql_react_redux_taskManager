import DeleteTask from "../Components/DeleteTask";
import { FETCH_TASKS,ADD_TASK, DELETE_TASK } from "./Types"

const Header={
    'Content-Type': 'application/json', 

}

export const getTasks=()=>(dispatch)=>{
    fetch("http://127.0.0.1:8000/api/tasks").then(res=>res.json()).then(data=>{
        console.log(data);
        dispatch({type:FETCH_TASKS,payload:data})
    })
}


export const addTask=(task)=>(dispatch)=>{
    const formData = new FormData();
    formData.append("task_name",task.task_name)
    formData.append("task_start",task.task_start)
    formData.append("task_end",task.task_end)
    formData.append("status",task.status)

    fetch("http://127.0.0.1:8000/api/tasks/", {
        method: 'Post',
 
        body:formData
    
    }).then(res =>res.json()).then(data=>{
        console.log(data);
        dispatch({type:ADD_TASK,payload:data})
    })

}

export const deleteTask=(id)=>(dispatch)=>{
    console.log("delete"+id);
    if(id){
   fetch(`http://127.0.0.1:8000/api/tasks/${id}`, {
       method: 'Delete',
   
   }).then(response =>{
       dispatch({type:DELETE_TASK,payload:id})
   })
    }

}