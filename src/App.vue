<script lang="ts">
import { defineComponent } from 'vue';
import WindowComponent from './components/WindowComponent.vue';
import { shuffleArray, createNumbersArray } from './utils.ts';

export default defineComponent({
  components: {
    // imported Components go here
    WindowComponent,
  },
  data() {
    return {
      // reactive data goes here
      days: shuffleArray(createNumbersArray(1, 24)),
      contents: shuffleArray([
        'https://loremflickr.com/140/140',
        'https://loremflickr.com/141/140',
        'https://loremflickr.com/140/141',
        'https://loremflickr.com/141/141',
        'https://loremflickr.com/139/140',
        'https://loremflickr.com/140/139',
        'https://loremflickr.com/139/139',
        'https://loremflickr.com/139/141',
        'https://loremflickr.com/141/139',
        'https://loremflickr.com/138/140',
        'https://loremflickr.com/140/138',
        'https://loremflickr.com/138/138',
        'https://loremflickr.com/138/139',
        'https://loremflickr.com/139/138',
        'https://loremflickr.com/137/140',
        'https://loremflickr.com/140/137',
        'https://loremflickr.com/137/137',
        'https://loremflickr.com/137/138',
        'https://loremflickr.com/138/137',
        'https://loremflickr.com/137/138',
        'https://loremflickr.com/138/137',
        'https://loremflickr.com/137/141',
        'https://loremflickr.com/141/137',
        'https://placekitten.com/140/140',
      ]),
    };
  },

  methods: {
    // methods go here
  },
});
</script>

<template>
  <h1>Weihnachtskalender 2021</h1>
  <div class="calendar">
    <!-- Here goes the WindowComponents -->
    <WindowComponent v-for="d in days" :day="d" :content="contents[d-1]" />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Mountains+of+Christmas:wght@700&display=swap');

#app {
  font-family: 'Mountains of Christmas', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 10px;
}

/* This creates a 6x4 grid with 140px wide squares */
.calendar {
  display: grid;
  grid-template-columns: repeat(6, 140px);
  grid-template-rows: repeat(4, 140px);
  gap: 20px;
}

</style>
