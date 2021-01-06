<template>
  <div>
    <div class="row">
      <div class="input-field col s12">
        <input id="email" v-model="email" type="email" class="validate" />
        <label for="email">Email</label>
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
      <button class="btn waves-effect waves-light" @click="login">
        Sign in
        <i class="material-icons right">send</i>
      </button>
    </div>
  </div>
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
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  computed: {
    ...mapGetters('auth', ['idToken']),
    isAuthenticated() {
      return this.idToken != null
    },
  },
  methods: {
    ...mapActions('auth', ['signIn']),
    login() {
      this.signIn({
        email: this.email,
        password: this.password,
      })
      this.email = null
      this.password = null
    },
  },
}
</script>
