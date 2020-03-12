<template>
  <li>
    <div><slot></slot> - Index: {{ index }}</div>
    <small>{{ task.dueDate }} @ {{ task.dueTime }}</small>
    <button style="margin-left:7px;" @click="deleteTask(index)">X</button>
  </li>
</template>

<script>
export default {
  props: ['task', 'index'],
  // props: {
  //   'task': {
  //     type: Object
  //   },
  //   'index': {}
  // },
  methods: {
    deleteTask (index) {
      this.task.splice(index, 1)
    }
  }
}
</script>

<style>
</style>
