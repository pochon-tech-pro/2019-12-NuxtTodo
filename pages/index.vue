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
        <v-btn @click="addTodo">add</v-btn>
      </v-card-text>
    </v-card>
    <v-divider /><v-divider />
    <!-- 表示 -->
    <v-list>
    <template v-for="(todo,index) in todos">
      <v-list-tile     
        :key="index"
      >
        <v-list-tile-content>
          <v-list-tile-title>
            {{ todo.content }}
          </v-list-tile-title>
        </v-list-tile-content>

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
  </v-content>
</template>

<script>
export default {
  data() {
    return {
      todos: [],
      content: '',
    }
  },
  components: {
  },
  methods: {
    addTodo() {
      if (! this.content) return alert('入力してください')
      this.todos.push({content: this.content})
      this.content = ''
    },
    deleteTodo(index) {
      this.todos.splice(index,1)
    }
  }
}
</script>
