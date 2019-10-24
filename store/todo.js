export const state = () => ({
  todos: [],
  content: '',
  editContent: '',
  currentTodo: {},
})
// export const getters = {
//   todos: state => state.todos
// }
export const actions = {
  setContent({ commit }, value) {
    commit("SET_CONTENT", value)
  },
  setEditContent({ commit }, value) {
    commit("SET_EDIT_CONTENT", value)
  },
  addTodo({ commit }) {
    commit("ADD_TODO")
  },
  editTodo({ commit }) {
    commit("EDIT_TODO")
    commit("CLEAR_CURRENT_TODO")
  },
  removeTodo({ commit }, id) {
    commit("REMOVE_TODO", id)
  },
  openDialog({ commit }, id) {
    commit("SET_CURRENT_TODO", id)
  },
  closeDialog({ commit }) {
    commit("CLEAR_CURRENT_TODO")
  }
}
export const mutations = {
  SET_CONTENT(state, value) {
    state.content = value
  },
  SET_EDIT_CONTENT(state, value) {
    state.editContent = value
  },
  ADD_TODO(state) {
    state.todos.push({
      id: generateRandString(),
      content: state.content
    })
    state.content = ''
  },
  EDIT_TODO(state) {
    const targetIndex = state.todos.findIndex((todo)=>(todo.id === state.currentTodo.id))
    state.todos[targetIndex].content = state.editContent
  },
  REMOVE_TODO(state, id) {
    const targetIndex = state.todos.findIndex((todo)=>(todo.id === id))
    console.log(targetIndex)
    state.todos.splice(targetIndex,1)
  },
  SET_CURRENT_TODO(state, id) {
    const target = state.todos.find((todo)=>(todo.id === id))
    state.currentTodo = target
    state.editContent = target.content
  },
  CLEAR_CURRENT_TODO(state) {
    state.currentTodo = {}
    state.editContent = ''
  }
}
const generateRandString = () => Math.random().toString(32).substring(2)