<template>
  <v-content>
    <v-app-bar>
      <v-toolbar-title headline>Todo List</v-toolbar-title>
    </v-app-bar>
    <v-divider />
    <v-card flat tile>
      <v-card-text><v-text-field v-model="content" placeholder="Todoを入力"/></v-card-text>
    </v-card>
    <v-list>

    </v-list>
    <v-divider />
  </v-content>
</template>

<script>
export default {
  data() {
    return {
      todos: [],
      content: ''
    }
  },
  components: {
  }
}
</script>
