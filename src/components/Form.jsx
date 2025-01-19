/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.todoform}>
        <div className={styles.inputContainer}>
          <input
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
            type="text"
            placeholder="Enter a todo"
            className={styles.modernInput}
          />

          <button type="submit" className={styles.modernbutton}>
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
