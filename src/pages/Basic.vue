<template>
  <q-page padding>
    <button
    style="position: absolute; right:10px;"
    @click="counter++"
    >
    {{ counter }}
    </button>

    <input
    v-model="message"
    @keyup.esc="clearMessage"
    @keyup.enter="alertMessage"
    v-autofocus
    v-bind:class="{ error : message.length > 22 }"
    ref="messageInput"
    />

    <!-- <button @click="message = ''">Clear</button> -->
    <button @click="clearMessage">Clear</button>

    <div>{{ message.length }}</div>

    <!-- <h5 v-show="message.length" class="border-grey">{{ message }}</h5> -->
    <h5 v-if="message.length" class="border-grey" :style="errorStyle">
    {{ message }}
    </h5>
    <h6 v-else>No message provided!</h6>

    <!-- <p>Uppercase Message: {{ messageUppercase() }}</p> -->
    <p>Uppercase Message: {{ messageUppercase }}</p>
    <p>Lowercase Message: {{ message | messageLowerCase }}</p>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      message: 'I Love Vue.js!',
      counter: 0
    }
  },
  computed: {
    messageUppercase () {
      console.log('Message Uppercase was fired!')
      return this.message.toUpperCase() + ' || Counter: ' + this.counter
    },
    errorStyle () {
      if (this.message.length > 22) {
        return {
          'color': 'red',
          'background': 'pink'
        }
      } else {
        return ''
      }
    }
  },
  methods: {
    clearMessage () {
      this.message = ''
    },
    // handleKeyup (e) {
    //   // console.log(e)
    //   if (e.keyCode === 27) { // Pressing Escape Key
    //     this.clearMessage()
    //   } else if (e.keyCode === 13) { // Pressing Enter Key
    //     this.alertMessage()
    //   }
    // },
    alertMessage () {
      alert(this.message)
    }
    // messageUppercase () {
    //   console.log('Message Uppercase was fired!')
    //   return this.message.toUpperCase()
    // }
  },
  filters: {
    messageLowerCase (value) {
      return value.toLowerCase()
    }
  },
  directives: {
    autofocus: {
      inserted (el) {
        // console.log('Input inserted!')
        el.focus()
      }
    }
  },
  // beforeCreate () {
  //   console.log('beforeCreate')
  // },
  // created () {
  //   console.log('created')
  // },
  // beforeMount () {
  //   console.log('beforeMount')
  // },
  mounted () {
    // console.log('mounted')
    console.log(this.$refs)
    this.$refs.messageInput.className = 'bg-green'
  }
  // beforeUpdate () {
  //   console.log('beforeUpdate')
  // },
  // updated () {
  //   console.log('updated')
  // },
  // beforeDestroy () {
  //   console.log('beforeDestroy')
  // },
  // destroyed () {
  //   console.log('destroyed')
  // }
}
</script>

<style>
.border-grey {
  border: 2px solid grey;
}
input, button{
  font-size: 23px;
}
.error{
  color: red;
  background: pink;
}
</style>
