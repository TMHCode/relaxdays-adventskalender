<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    day: {
      type: Number,
      required: true,
    },
    content: {
      required: true,
    },
  },
  data() {
    return {
      // reactive data goes here
      closed: true,
    };
  },

  methods: {
    // methods go here
    open() {
      this.closed = this.closed ? false : true;
    },
  },
});
</script>

<template>
  <button class="buttonclosed" @click="open" v-if="closed">
    {{ day }}
  </button>

  <img class="buttonopen" @click="open" v-else :src="content" />
</template>

<style scoped>
.buttonclosed {
  background-color: #a1f0ed;
  font-family: 'Mountains of Christmas', cursive;
  font-size: 50;
  border: none;
  border-radius: 12px;
  opacity: 0.6;
}
.buttonclosed:hover {
  opacity: 1;
}

.buttonopen {
  background-color: #a1f0ed;
  font-family: 'Mountains of Christmas', cursive;
  font-size: 50;
  border: none;
  border-radius: 12px;
}
</style>
