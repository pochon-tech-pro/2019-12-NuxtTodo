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
      <v-list-tile :key="index" @click="show(todo.id)">
        <v-list-tile-content>
          <v-list-tile-title>
            {{ todo.content }}
          </v-list-tile-title>
        </v-list-tile-content>

        <v-list-tile-action>
          <v-btn icon>
            <v-icon @click.stop="open(todo.id)">edit</v-icon>
          </v-btn>
        </v-list-tile-action>
        
        <v-list-tile-action>
          <v-btn icon>
            <v-icon @click.stop="remove(todo.id)">delete</v-icon>
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
          <v-btn color="blue darken-1" text @click="edit()">Save</v-btn>
          <v-btn color="blue darken-1" text @click="close()">close</v-btn>
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
      editDialog: false,
    }
  },
  computed: {
    todos : {
      get(){
        return this.$store.state.todo.todos
      }
    },
    content:{
      get(){
        return this.$store.state.todo.content
      },
      set(value){
        this.setContent(value)
      },
    },
    editContent: {
      get(){
        return this.$store.state.todo.editContent
      },
      set(value) {
        this.setEditContent(value)
      }
    }
  },
  methods: {
    ...mapActions("todo", [
      "setContent",
      "setEditContent",
      "addTodo",
      "editTodo",
      "removeTodo",
      "setEditContent",
      "openDialog",
      "closeDialog"
    ]),
    add() {
      if (! this.content) return alert('入力してください')
      this.addTodo()
    },
    remove(id) {
      this.removeTodo(id)
    },
    open(id) {
      this.openDialog(id)
      this.editDialog = true
    },
    close() {
      this.closeDialog()
      this.editDialog = false
    },
    edit () {
      if (! this.editContent) return alert('入力してください')
      this.editTodo()
      this.editDialog = false
    },
    show(id) {
      const targetIndex = this.todos.findIndex((todo)=>(todo.id === id))
      alert(`TODO： ${ this.todos[targetIndex].content }`)
    }
  }
}
</script>
