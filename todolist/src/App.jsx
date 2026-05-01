import { useState } from "react";
function App()
{
    let [todos, setTodos] = useState([])
    let [data,setData] = useState("")
    let [editIndex , setEditIndex] = useState(null)

    function addOrUpdateTodo()
    {
           if(data.trim()==="") return; 
           
           //! adding
           if(editIndex == null)
              setTodos([...todos,data])
           else
           {
              //! update
              let updated = [...todos];
              updated[editIndex] = data;
              setTodos(updated)
              setEditIndex(null)
           }


           setData("")
    }

    let deleteTodo =(index)=>{

      let updatedTodo =  todos.filter((ele,ind)=> ind!= index);
      setTodos(updatedTodo);
    }

    let editTodo =(index)=>{

         setData( todos[index]);
         setEditIndex(index)
    }
  
    return(
       <div className="outer">

                <h1> todo application</h1>
                <div className="search">
                   <input type="text"  value={data} onChange={(e)=>setData(e.target.value)} />
                   <button onClick={addOrUpdateTodo}> 

                        {editIndex==null? "add" : "update"} 
                    </button>
                </div>
                <main>
                     {
                       todos.map((ele,index)=>{
                        return(
                          <li 
                          key={index}> {ele}
                          <button onClick={()=>editTodo(index)} >edit</button>
                          <button onClick={()=>deleteTodo(index)} >delete</button>
                           </li>
                        )
                       })
                     }
                </main>
       </div>
    )
}

export default App;