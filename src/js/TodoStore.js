import { autorun, observable } from "mobx"

class Todo {
  @observable value
  @observable id
  @observable complete

  constructor(value) {
    this.value = value
    this.id = Date.now()
    this.complete = false
  }
}

class TodoStore {
  @observable todos = []
  @observable filter = ""
  createTodo(value){
    this.todos.push(new Todo(value))
  }
}

var store = new TodoStore

export default store

autorun(() => {
  console.log(store.filter)
  console.log(store.todos[0])
})
