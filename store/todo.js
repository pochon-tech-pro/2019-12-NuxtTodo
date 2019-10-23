export const state = () => ({
  todos: [],
  content: ''
})
export const getters = {
  todos: state => state.todos
}
export const actions = {
  setContent({ commit }, value) {
    commit("SET_CONTENT", value)
  },
  addTodo({ commit }) {
    commit("ADD_TODO")
  },
  removeTodo({ commit }, index) {
    commit("REMOVE_TODO", index)
  }
}
export const mutations = {
  SET_CONTENT(state, value) {
    state.content = value
  },
  ADD_TODO(state, value) {
    state.todos.push({ content: state.content })
    state.content = ''
  },
  REMOVE_TODO(state, index) {
    state.todos.splice(index,1)
  }
}