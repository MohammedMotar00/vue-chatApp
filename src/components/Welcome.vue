<template>
  <div class="welcome container">
    <div class="card">
      <div class="card-content center-align">
        <h2 class="teal-text">Welcome</h2>
        <form @submit.prevent="enterChat">
          <label for="name">Enter your name:</label>
          <input type="text" name="name" v-model="name" />
          <p v-if="feedback" class="red-text">{{ feedback }}</p>
          <button class="btn teal">Enter Chat</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "welcome",
  data() {
    return {
      name: null,
      feedback: null,
    };
  },

  methods: {
    enterChat() {
      if (this.name) {
        this.$router.push({ name: "Chat", params: { name: this.name } });
      } else {
        this.feedback = "You must enter a name to join!";
      }
    },
  },
};
</script>

<style lang="scss">
.welcome {
  max-width: 400px;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);

  h2 {
    font-size: 3em;
  }

  button {
    margin: 30px auto;
  }
}
</style>