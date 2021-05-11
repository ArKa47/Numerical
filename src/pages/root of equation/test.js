import React, { Component , useState } from 'react'

function App()
{
    
    const [todoList, setTodoList] = useState(["How are you?"])
    const [todo, setTodo] = useState(["Welcome!"])
    const [todoText, setTodoText] = useState(["Need some tea? cofee?"])
    const [text,setText] = useState(["How may i help?"])
    const addTask = () =>
    {
        setTodoList([
            ...todoList,
            todoText
        ])
    }
    const addTask2 = () =>
    {
        setTodo(
            [
                ...todo,
                text
            ]
        )
    }
    return(
        <div>
            {todoList}
            <input type="text" value={todoText} onChange={ (e) => setTodoText(e.target.value) }></input>
            <button onClick={addTask}>Add task</button>
            <br></br>
            <input type="text" value={text} onChange={ (e) => setText(e.target.value)}></input>
            <button onClick={addTask2}>Add task2</button>
            {
                todo.map((pop, index) => {
                    return (
                        <div className="pop" key={index}>
                            {pop}
                        </div>
                    )
                }) 
            }
            {todo}
        </div>
    )
}

export default App;