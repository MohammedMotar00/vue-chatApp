<template>
  <div class="chat container">
    <h2 class="center teal-text">Motar Chat</h2>
    <div class="card">
      <div class="card-content">
        <ul class="messages" v-chat-scroll>
          <li v-for="message in messages" :key="message.id">
            <span class="teal-text">{{ message.name }}</span>
            <span class="grey-text text-darken-3">{{ message.content }}</span>
            <span class="grey-text time">{{ message.timestamp }}</span>
          </li>
        </ul>
      </div>

      <div class="card-action">
        <NewMessage :name="name" />
      </div>
    </div>
  </div>
</template>

<script>
import NewMessage from "./NewMessage";
import db from "../firebase/init";
import moment from "moment";

export default {
  name: "Chat",

  props: ["name"],

  components: {
    NewMessage,
  },

  data() {
    return {
      messages: [],
    };
  },

  created() {
    let ref = db.collection("messages").orderBy("timestamp");

    ref.onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type == "added") {
          let doc = change.doc;

          this.messages.push({
            id: doc.id,
            name: doc.data().name,
            content: doc.data().content,
            timestamp: moment(doc.data().timestamp).format("lll"),
          });
        }
      });
    });
  },
};
</script>

<style lang="scss" scoped>
.chat {
  h2 {
    font-size: 2.6em;
    margin-bottom: 40px;
  }

  span {
    font-size: 1.4em;
    margin-right: 10px;
  }

  li {
    margin-bottom: 10px;
  }

  .time {
    display: block;
    font-size: 1.2em;
  }

  .messages {
    max-height: 300px;
    overflow: auto;

    &::-webkit-scrollbar {
      width: 3px;
    }

    &::-webkit-scrollbar-track {
      background-color: #ddd;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #aaa;
    }
  }
}

@media (max-width: 320px) {
  span {
    font-size: 1.05em !important;
  }
}
</style>