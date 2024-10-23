import React, {useState} from "react";
import { Button, Checkbox, IconButton, ListItem, TextField, List } from "@mui/material";
import { Delete as DeleteIcon, Edit as EditIcon, Save as SaveIcon} from "@mui/icons-material";
import {v4 as uuid4} from 'uuid';
import { useGlobalState } from "./GlobalState";

function TodoComponent() {
    const { todos, setGlobalState } = useGlobalState();
    const [newTodo, setNewTodo] = useState('');
    const [editId, setEditId] = useState(null);
    const [editText, setEditText] = useState("");
  
    // Create a function which mutates GlobalState
    const addTodo = () => {
        if(newTodo.trim()){
            const updatedTodos = [...todos, {id: uuid4(), text: newTodo, completed: false}]
            setGlobalState({todos: updatedTodos});
            setNewTodo('');
        }else{
            alert("Cannot add an empty todo")
        }
    };
  
    const toggleTodo = (id) => {
      const updatedTodos = todos.map((todo) => 
          todo.id == id ? {...todo, completed: !todo.completed} : todo
      );
      setGlobalState({ todos: updatedTodos });
    }

    const deleteTodo = (id) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setGlobalState({todos:updatedTodos})
    }

    const startEditing = (id, currentText) => {
        setEditId(id);
        setEditText(currentText);
    }

    const saveEdit = (id) => {
        if(editText.trim()){
            const updatedTodos = todos.map((todo) =>    
                todo.id === id ? {...todo, text: editText} : todo
            );
            setGlobalState({todos: updatedTodos})
            setEditId(null);
            setEditText("");
        }else{
            alert("Cannot edit empty todo.")
        }
    }
    
    return(
      <div>
          <h1>Todos</h1>
          <TextField
              label="New Todo"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
          />
          <Button onClick={addTodo}>
              Add
          </Button>

          <List>
            {todos.map((todo) => (
                <ListItem key={todo.id}>
                    <Checkbox
                        checked={todo.completed}
                        onChange={() => toggleTodo(todo.id)}
                    />
                    {editId === todo.id?(
                        <TextField
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                            size="small"
                        />
                    ) : (
                        <span
                            style={{
                                textDecoration: todo.completed ? "line-through" : "none",
                            }}
                        >
                            {todo.text}
                        </span>
                    )}
                    <IconButton onClick={() => deleteTodo(todo.id)}>
                        <DeleteIcon />
                    </IconButton>
                    {editId === todo.id ? (
                        <IconButton onClick={() => saveEdit(todo.id)}>
                        <SaveIcon />
                    </IconButton>
                    ): (
                        <IconButton onClick={() => startEditing(todo.id, todo.text)}>
                        <EditIcon />
                    </IconButton>
                    )}
                </ListItem>
            ))}
          </List>
      </div>
    )
  }

  export default TodoComponent;