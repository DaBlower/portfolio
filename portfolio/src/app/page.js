"use client";

import Image from "next/image";
import MyComponent from "@/components/MyComponent";
import ProductList from "@/components/MyList";
import { useState, useEffect } from 'react';

const electronics =[
  {title: "Laptop", id: 1},
  {title: "Headphones", id: 2},
  {title: "Keyboard", id: 3},
]

  const products = [
      {title: "Cabbage", id: 1},
      {title: "Garlic", id: 2},
      {title: "Apple", id: 3},
  ];

export default function Home() {
  const [todo, setTodo] = useState(null)
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => setTodo(json))
    .catch(err => console.error("API fetch error:", err));

  },[]);
  return (
    <div className="container mx-auto p-8 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">DaBlower's Portfolio</h1>
      <MyComponent name={"obob"}/>
      <h2 className="text-2xl font-semibold text-gray-800 mt-8">Lists</h2>
      <p className="text-gray-600 mb-4">Here's an example of a list of products:</p>
      <ProductList products={products}/>
      <p className="text-gray-600 mb-4">Here's an example of a list of electronics:</p>
      <ProductList products={electronics} />
      <h2 className="text-2xl font-semibold text-gray-800 mt-8">Fetched Todo</h2>
      {todo ? (
        <div className="text-gray-700">
          <p><strong>ID:</strong> {todo.id}</p>
          <p><strong>Title:</strong> {todo.title}</p>
        </div>
      ) : (
        <p className="text-gray-500">Loading todo...</p>
      )}
      <br/>
      <h2 className="text-gray-600 mb-4"><a className="text-blue-700" href="/home">Here</a> is a route</h2>
    </div>
  );
}
