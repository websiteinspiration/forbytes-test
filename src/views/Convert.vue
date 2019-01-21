<template>
  <div class="home">
      <literable-number></literable-number>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LiterableNumber from '@/components/LiterableNumber.vue';

@Component({
  components: {
    LiterableNumber,
  },
})
export default class Convert extends Vue {}
</script>
