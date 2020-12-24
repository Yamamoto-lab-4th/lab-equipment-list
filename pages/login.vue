<template>
  <div class="row">
    <form class="col s12">
      <div class="row">
        <div id="title" class="col s12">Login</div>
      </div>
      <div class="row">
        <div class="input-field col s6">
          <input id="first_name" type="text" class="validate" />
          <label for="first_name">First Name</label>
        </div>
        <div class="input-field col s6">
          <input id="last_name" type="text" class="validate" />
          <label for="last_name">Last Name</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="password" type="password" class="validate" />
          <label for="password">Password</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="email" type="email" class="validate" />
          <label for="email">Email</label>
        </div>
      </div>
      <div class="row">
        <button
          class="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          Sign in
          <i class="material-icons right">send</i>
        </button>
      </div>
    </form>
  </div>
</template>

<style>
#title {
  color: #26a69a;
  font-size: 50px;
}
</style>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      password: '',
      email: '',
    }
  },
  methods: {
    login() {
      axios
        .post(
          `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.FIRE_AUTH_API_KEY}`,
          {
            password: this.password,
            email: this.email,
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
