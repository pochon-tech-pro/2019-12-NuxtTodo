<template>
  <v-content>
    <!-- Title -->
    <v-toolbar
      prominent
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-toolbar-title>Todo List</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-divider />
    <!-- 入力Form -->
    <v-card flat tile>
      <v-card-text>
        <v-text-field v-model="content" placeholder="Todoを入力" />
        <v-btn @click="add">add</v-btn>
      </v-card-text>
    </v-card>
    <v-divider /><v-divider />
    <!-- 表示 -->
    <v-list>
    <template v-for="(todo,index) in todos">
      <v-list-tile :key="index" @click="showTodo(index)">
        <v-list-tile-content>
          <v-list-tile-title>
            {{ todo.content }}
          </v-list-tile-title>
        </v-list-tile-content>

        <v-list-tile-action>
          <v-btn icon>
            <v-icon @click.stop="openEditDialog(index)">edit</v-icon>
          </v-btn>
        </v-list-tile-action>
        
        <v-list-tile-action>
          <v-btn icon>
            <v-icon @click.stop="deleteTodo(index)">delete</v-icon>
          </v-btn>
        </v-list-tile-action>

      </v-list-tile>
      <v-divider
        v-if="index + 1 < todos.length" 
        :key="`divider-${index}`"
      >
      </v-divider>
    </template>
  </v-list>

    <v-dialog v-model="editDialog" max-width='800px'>
      <v-card>
        <v-card-title><span class="headline">Edit Todo</span></v-card-title>
        <v-card-text>
          <v-text-field label="content" v-model="editContent"></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn color="blue darken-1" text @click="editTodo()">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  
  </v-content>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex"
export default {
  data() {
    return {
      index: '',
      content: '',
      editContent: '',
      editDialog: false,
    }
  },
  computed: {
    todos() { return this.$store.state.todo.todos }
  },
  methods: {
    ...mapActions("todo", [
      "addTodo",
    ]),
    add() {
      if (! this.content) return alert('入力してください')
      this.addTodo({ content: this.content })
      this.content = ''
    },
    deleteTodo(index) {
      this.todos.splice(index,1)
    },
    openEditDialog(index) {
      this.index = index
      this.editContent = this.todos[this.index].content
      this.editDialog = true
    },
    editTodo() {
      if (! this.editContent) return alert('入力してください')
      this.todos[this.index].content = this.editContent
      this.index = ''
      this.content = ''
      this.editDialog = false
    },
    showTodo(index) {
      alert(`TODO： ${ this.todos[index].content }`)
    }
  }
}
</script>
