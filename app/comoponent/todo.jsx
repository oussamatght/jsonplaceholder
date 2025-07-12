"use client";
import { useState, useEffect } from "react";
export default function Todo() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchTodos() {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts",
        {
          cache: "no-store",
          next: { revalidate: 120},
        }
      );
      const posts = await res.json();
       setTodos(posts);
      console.log(posts);
    }
    fetchTodos();
  }, []);

  return (
    <div className="todo">
      <h1>Todo List</h1>
      <h2>{todos.title}</h2>
      
    </div>
  );
}