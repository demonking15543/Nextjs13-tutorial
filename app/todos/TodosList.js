import Link from 'next/link';
import React from 'react'

const fetchTodos = async () => {
    const resp = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await resp.json();
    return todos;


};

async function TodosList() {
    const todos = await fetchTodos();
    
  return (
    <>
    {todos.map((todo)=> (
        <p key={todo.id}>
            <Link href={`todos/${todo.id}`}>Todo: {todo.id}</Link>
        </p>
    ))
    }
    </>
  )
}

export default TodosList