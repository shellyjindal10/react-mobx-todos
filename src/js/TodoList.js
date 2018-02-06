import React from "react"
import { observer } from "mobx-react"

@observer
export default class TodoList extends React.Component {
  toggleComplete(todo, e) {
    todo.complete = !todo.complete
  }

  createNew(e) {
    if(e.which === 13) {
      this.props.store.createTodo(e.target.value)
      e.target.value = ""
    }
  }

  filter(e) {
    this.props.store.filter = e.target.value
  }

  render() {
    const {todos, filter} = this.props.store
    const todoLis = todos.map(todo => (
      <li key={todo.id}>
        <input type="checkbox" value={todo.complete} checked={todo.complete} onChange={this.toggleComplete.bind(this, todo)}/>{todo.value}
      </li>
    ))

    return <div>
      <h1>todos</h1>
      <div>{filter}</div>
      <input className="create" onKeyPress={this.createNew.bind(this)}/>
      <input className="filter" value={filter} onChange={this.filter.bind(this)}/>
      <ul>{todoLis}</ul>
    </div>
  }
}
