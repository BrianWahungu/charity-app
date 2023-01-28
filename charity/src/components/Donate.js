import React,{useState,useEffect} from "react";
import { getNextId } from './list'


function Donate({lists}){
     const [todos, setTodos] = useState(
      () => JSON.parse(localStorage.getItem("todos")) || []
     );
     useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  

    const [newItemFields, setNewItemFields]=useState({
        charityname:'',
        email:'',
        amount:'',
        name:'',
        telNo:''
      })

      function addTodo(newItemFields) {
        const newTodo = {
          id: getNextId(),
          charityName: newItemFields.charityname,
          Amount: newItemFields.amount,
        };
        
        const updatedTodos = [...todos, newTodo]
        setTodos(updatedTodos);
      }
      function handleFields(e){
        const{name,value}=e.target
        setNewItemFields(newItemFields => {
            return{
                ...newItemFields,
                [name]:value
            }})
  
      }
      function handleSubmit(e){
        e.preventDefault()
        addTodo(newItemFields)
         setNewItemFields({
            charityname:'',
            email:'',
            amount:'',
            name:'',
            telNo:''
        })
      }
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            charity Name
            <select
            name="charityname"
            value={newItemFields.charityname}
            placeholder="Charity Name"
            onChange={handleFields}>
              {lists.map((list,index)=>(
                <option key={index}>{list.charityName}</option>
              ))}
            </select>
            </label>
             <input
            name='name'
            type="text"
            onChange={handleFields}
            value={newItemFields.name}
            placeholder="Name"/>
            <input
            name="email"
            type="email"
            value={newItemFields.email}
            placeholder="Email"
            onChange={handleFields}/>
            <input
            name='telNo'
            value={newItemFields.telNo}
            onChange={handleFields}
            placeholder="Telephone No."
            type="number"/>
            <input 
            name="amount"
            value={newItemFields.amount}
            onChange={handleFields}
            type="number"
            placeholder="Amount"/>

          <center><button >Submit</button></center>

        </form>
        <div>
          <center><h2>Donations</h2></center>
          <table>
            <thead>
              <tr>
              
                <th>Charity Name</th>
                <th>Amount</th>
                
              </tr>
              </thead>
              <tbody>
              {todos.map((todo,index)=>{
           return <tr key={index}>
            <td>{todo.charityName}</td>
            <td>{todo.Amount}</td>
            </tr> })}
              </tbody>
          </table>
          
          
          
        </div>
        </div> 
    )
}

export default Donate