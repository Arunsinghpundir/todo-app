import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Form.css";
import {firestore as db}  from './firebase.utils' 
import firebase from './firebase.utils';
export const Form = () => {
  const [input, setInput] = useState("");
  const [todo,setTodo] = useState([]);

  //function to store data in firebase
  function addTodo(e) {
    e.preventDefault();
    db.collection("todoList").add({
        todo: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
    setInput("")
  }
  //function to retrive data in firebase
  useEffect(()=>{
    db.collection("todoList").orderBy("timestamp","desc").onSnapshot(
      snapshot =>{
        setTodo(snapshot.docs.map(
          doc => ({
            id : doc.id,
            todo: doc.data().todo,
            timestamp:doc.data().timestamp
          })
        ))
      }
    )
  },[input])
  console.log(todo , " hello");
  return (
    <section className="box">
      <header>
        <h1>Todo-App</h1>
      </header>
      <form>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type here..."
        />
        <button type="submit" disabled={!input} onClick={addTodo}>
          Add
        </button>
      </form>
      <table className="table">
        <thead>
          <tr><th colSpan={2}></th></tr>
        </thead>
        <tbody>

           {
           todo.map(list=>{
            
             return <tr key={list.id}>
              <th>{list.todo}</th>
             <th><button className="btn btn-warning" onClick={(e)=>{
              db.collection("todoList").doc(list.id).delete()
             }}>&times;</button></th>
              </tr>
            })}
      
        </tbody>
      </table>
    </section>
  );
};
