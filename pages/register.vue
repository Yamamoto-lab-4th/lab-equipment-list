<template>
  <!-- <div class="row"> -->
  <!-- <form class="col s12"> -->
  <div>
    <div class="row">
      <div id="title" class="col s12">Register</div>
    </div>
    <div class="row">
      <div class="input-field col s6">
        <input id="firstName" type="text" class="validate" />
        <label for="firstName">First Name</label>
      </div>
      <div class="input-field col s6">
        <input id="lastName" type="text" class="validate" />
        <label for="lastName">Last Name</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s12">
        <input
          id="password"
          v-model="password"
          type="password"
          class="validate"
        />
        <label for="password">Password</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s12">
        <input id="email" v-model="email" type="email" class="validate" />
        <label for="email">Email</label>
      </div>
    </div>
    <div class="row">
      <button class="btn waves-effect waves-light" @click="register">
        Sign up
        <i class="material-icons right">send</i>
      </button>
    </div>
  </div>
  <!-- </form> -->
  <!-- </div> -->
</template>

<style>
#title {
  color: #26a69a;
  font-size: 50px;
}

input {
  color: #26a69a;
}
</style>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  mounted() {
    console.log(process.env.FIRE_AUTH_API_KEY)
  },
  methods: {
    register() {
      axios
        .post(
          `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.FIRE_AUTH_API_KEY}`,
          // 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAQKGMg6jjhJMxe8I7GBnRx37FseU2GYW0',
          {
            email: this.email,
            password: this.password,
            returnSecureToken: true,
          }
        )
        .then((response) => {
          console.log(response)
        })
    },
  },
}
</script>
