import React from 'react'

import Form from "./Form"
import TodoList from "./TodoList"



let id = 0
let getId = () => ++id

const initialTodos = [
  {id: getId() , name: 'Go To Work' , completed: false},
  {id: getId() , name: 'Learn React' , completed: false},
  {id: getId() , name: 'Laundry' , completed: true},
]

export default class App extends React.Component {

  state = {
    todos: initialTodos
  }

  toggleComplete = id => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map(td => {
        if(id === td.id) return {...td, completed: !td.completed}
        return td
      })
    })
  }

  addTodo = (name) => {
    this.setState({
      ...this.state, 
      todos: this.state.todos.concat({id: getId(), completed: false, name })
    })
  }

  render() {
    return (
      <div>
       <TodoList todos = {this.state.todos} toggleComplete = {this.toggleComplete} />
       <Form addTodo = {this.addTodo} />
      </div>
    )
  }
}
