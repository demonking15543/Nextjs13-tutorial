import React from 'react'
import { notFound } from 'next/navigation';
export const dynamicParams = true;

 const fetchTodo = async (id) => {
  const todo =  await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, { next: {revalidate:60}});
  return todo.json()

}
async function Todo({params: {id}}) {
  const todo =  await fetchTodo(id);
  if (!todo.id) return notFound();
  
  return (
    <div className='p-10 bg-yellow-200 border-2 m-2 shadow-lg'>
       <p>#{todo.id}: {todo.title}</p>
       <p>Completed: {todo.completed ? "Yes" : "No"} </p>
       <p className='border-t border-black text-right mt-5'>BY user: {todo.userId}</p>
    </div>
  )
}

export default Todo


export async function generateStaticParams(){
  const resp = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await resp.json();
  // remove this line on production
  const trimTodos = todos.splice(0, 10);
  return  trimTodos.map((todo)=>({
    id: todo.id.toString(),
  })
  )


}