<template>
  <q-card>
    <q-card-section class="row">
      <div class="text-h6">Add Task</div>
      <q-space />
      <q-btn v-close-popup dense flat round color="red" icon="close" />
    </q-card-section>

    <form @submit.prevent="submitForm">
      <q-card-section class="q-pt-none">
        <div class="row q-mb-sm">
          <q-input
            outlined
            v-model="taskToSubmit.name"
            label="Task Name"
            autofocus
            :rules="[val => !!val || 'Field is required']"
            ref="name"
            class="col">
            <template v-slot:append>
              <q-icon
              v-if="taskToSubmit.name"
              name="close"
              @click="taskToSubmit.name = ''"
              class="cursor-pointer" />
            </template>
          </q-input>
        </div>

        <div class="row q-mb-sm">
          <q-input outlined label="Due Date" v-model="taskToSubmit.dueDate">
            <template v-slot:append>
              <q-icon
              v-if="taskToSubmit.dueDate"
              name="close"
              @click="clearDueDate"
              class="cursor-pointer" />
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                  <q-date v-model="taskToSubmit.dueDate" @input="() => $refs.qDateProxy.hide()" />
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>

        <div
        v-if="taskToSubmit.dueDate"
        class="row q-mb-sm">
          <q-input
          outlined
          label="Due Time"
          v-model="taskToSubmit.dueTime"
          class="col">
            <template v-slot:append>
              <q-icon
              v-if="taskToSubmit.dueTime"
              name="close"
              @click="taskToSubmit.dueTime = ''"
              class="cursor-pointer" />
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy transition-show="scale" transition-hide="scale">
                  <q-time v-model="taskToSubmit.dueTime" />
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn
        label="Save"
        color="primary"
        type="submit"
      />
      </q-card-actions>

    </form>
  </q-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      taskToSubmit: {
        name: '',
        dueDate: '',
        dueTime: '',
        completed: false
      }
    }
  },
  methods: {
    ...mapActions('tasks', ['addTask']),
    submitForm () {
      // console.log('Form Submitted')
      this.$refs.name.validate()
      // console.log(this.$refs.name)
      if (!this.$refs.name.hasError) {
        this.submitTask()
      }
    },
    submitTask () {
      // console.log('Task Submitted')
      this.addTask(this.taskToSubmit)
      this.$emit('close')
    },
    clearDueDate () {
      this.taskToSubmit.dueDate = ''
      this.taskToSubmit.dueTime = ''
    }
  }
}
</script>

<style>
</style>
