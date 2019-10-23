export const state = () => ({
  todos: []
})
export const getters = {
  todos: state => state.todos
}
export const actions = {
  addTodo({ commit }, value){
    commit("ADD_TODO", value)
  }
}
export const mutations = {
  ADD_TODO(state, value) {
    state.todos.push(value)
  }
}