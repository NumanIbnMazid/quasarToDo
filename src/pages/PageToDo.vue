<template>
  <q-page class="q-pa-md">

    <q-list
    v-if="Object.keys(tasks).length"
    separator
    bordered>
      <task
      v-for="(task, key) in tasks"
      :key="key"
      :task='task'
      :id="key">
      </task>
    </q-list>

  <div class="absolute-bottom text-center q-mb-lg">
      <q-btn
      @click="showAddTask = true"
        round
        color="primary"
        size="20px"
        icon="add"
      />
  </div>

  <q-dialog v-model="showAddTask">
    <add-task @close="showAddTask = false" />
  </q-dialog>

  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  // data () {
  //   return {
  //     tasks: [
  //       {
  //         id: 1,
  //         name: 'Go to shop',
  //         completed: false,
  //         dueDate: '2020/01/13',
  //         dueTime: '13:25'
  //       },
  //       {
  //         id: 2,
  //         name: 'Get bananas',
  //         completed: false,
  //         dueDate: '2020/01/14',
  //         dueTime: '15:21'
  //       },
  //       {
  //         id: 3,
  //         name: 'Get apples',
  //         completed: false,
  //         dueDate: '2020/01/17',
  //         dueTime: '23:12'
  //       }
  //     ]
  //   }
  // }

  data () {
    return {
      showAddTask: false
    }
  },

  computed: {
    // tasks () {
    //   return this.$store.getters['tasks/tasks']
    // }
    ...mapGetters('tasks', ['tasks'])
  },
  components: {
    'task': require('components/Tasks/Task.vue').default,
    'add-task': require('components/Tasks/Modals/AddTask.vue').default
  }
}
</script>

<style>
</style>
