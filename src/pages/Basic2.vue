<template>
  <q-page padding>
    <ul>
      <!-- <li v-for="task in tasks" :key="task" > -->
      <!-- <li v-for="(task, index) in tasks" :key="task.id" > -->
      <!-- <div>{{ task.name }} - Index: {{ index }}</div> -->
      <!-- <small>{{ task.dueDate }} @ {{ task.dueTime }}</small> -->
      <!-- <button style="margin-left:7px;" @click="deleteTask(index)">X</button> -->
      <!-- </li> -->
      <task
      v-for="(task, index) in tasks"
      :key="task.id"
      :task='tasks'
      :index='index'
      >
      {{ task.name }}
      </task>
    </ul>
  </q-page>
</template>

<script>

// import Task from 'components/Task.vue'

export default {
  data () {
    return {
      // tasks: ['Go to shop', 'Get bananas', 'Get apples']
      tasks: [
        {
          id: 1,
          name: 'Go to shop',
          dueDate: '2020/01/12',
          dueTime: '18:30'
        },
        {
          id: 2,
          name: 'Get bananas',
          dueDate: '2020/01/14',
          dueTime: '02:10'
        },
        {
          id: 3,
          name: 'Get apples',
          dueDate: '2020/01/17',
          dueTime: '19:50'
        }
      ]
    }
  },
  // methods: {
  //   deleteTask (index) {
  //     this.tasks.splice(index, 1)
  //   }
  // },
  components: {
    // 'task': Task
    'task': require('components/Basic.vue').default
  }
}
</script>

<style>

</style>
