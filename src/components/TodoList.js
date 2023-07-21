import React, { useEffect, useState } from 'react';

const TodoList = () => {
    const items = [
        'tarea 1',
        'tarea 2',
        'tarea 3',
    ];

    const [todoList, setTodoList] = useState(items);
    const [newTodo, setNewTodo] = useState('');

    const handleAddTodo = () => {
        
        setTodoList([...todoList, newTodo]);
        setNewTodo('');
    }

    useEffect(() => {
        console.log('La lista de pendientes a cambiado');
    }, [todoList])

    return (
        <div>
            <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)}/>
            <button type="button" onClick={handleAddTodo}>Add todo</button>
            <ul>
                {todoList.map((item, index) => <li key={index}>
                    {item}
                </li>)}
            </ul>
        </div>
    )
}

export default TodoList;