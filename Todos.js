import React,{useState} from 'react';

function Todos () {

    const [desc, setDesc] = useState({description: '', date: ''});
    const [todos, setTodos] = useState([]);

    const addTodos = (event) => {
        event.preventDefault();
        setTodos ([...todos, desc])
    }

    const inputChanged = (event) => {
        setDesc({...desc, [event.target.name]: event.target.value})
    }

    const deleteTodo = (row) => {
       setTodos(todos.filter((desc, index) => index !== row))
    }
    
    return (
        <div>
           Date: <input type='Date' name='date' value={desc.date} onChange={inputChanged}/>
           Todo: <input type='text' name='description' value={desc.description} onChange={inputChanged}/>
            <button onClick={addTodos}>Add</button>
            <table>
                <tbody>
                    <tr><th>Tehtävä</th><th>Date</th> </tr>
                    {
                        todos.map((todo, index) => 
                        <tr key= {index}>
                            <td>{todo.description}</td>
                            <td>{todo.date}</td>
                            <td><button onClick ={() => deleteTodo(index)}>Delete</button></td>
                            </tr>
                            )
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Todos;