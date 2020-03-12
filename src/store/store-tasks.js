import Vue from 'vue'
import { uid } from 'quasar'

const state = {
  // tasks: [
  //   {
  //     id: 1,
  //     name: 'Go to shop',
  //     completed: false,
  //     dueDate: '2020/01/13',
  //     dueTime: '13:25'
  //   },
  //   {
  //     id: 2,
  //     name: 'Get bananas',
  //     completed: false,
  //     dueDate: '2020/01/14',
  //     dueTime: '15:21'
  //   },
  //   {
  //     id: 3,
  //     name: 'Get apples',
  //     completed: false,
  //     dueDate: '2020/01/17',
  //     dueTime: '23:12'
  //   }
  // ]

  tasks: {
    // 'ID1': {
    //   name: 'Go to shop',
    //   completed: false,
    //   dueDate: '2020/01/13',
    //   dueTime: '13:25'
    // },
    // 'ID2': {
    //   name: 'Get bananas',
    //   completed: false,
    //   dueDate: '2020/01/14',
    //   dueTime: '15:21'
    // },
    // 'ID3': {
    //   name: 'Get apples',
    //   completed: false,
    //   dueDate: '2020/01/17',
    //   dueTime: '23:12'
    // }
  }
}

const mutations = {
  updateTask (state, payload) {
    // console.log('mutations payload: ', payload)
    Object.assign(state.tasks[payload.id], payload.updates)
  },
  deleteTask (state, id) {
    // console.log('mutation delete id:', id)
    // delete state.tasks[id]
    Vue.delete(state.tasks, id)
  },
  addTask (state, payload) {
    Vue.set(state.tasks, payload.id, payload.task)
  }
}

const actions = {
  updateTask ({ commit }, payload) {
    // console.log('Task Updated')
    // console.log('payload: ', payload)
    commit('updateTask', payload)
  },
  deleteTask ({ commit }, id) {
    commit('deleteTask', id)
  },
  addTask ({ commit }, task) {
    let taskId = uid()
    let payload = {
      id: taskId,
      task: task
    }
    commit('addTask', payload)
  }
}

const getters = {
  tasks: (state) => {
    return state.tasks
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
